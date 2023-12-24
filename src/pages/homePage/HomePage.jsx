import { Suspense, useState, useEffect, useLayoutEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import Loader from '../../components/Loader';
import Container from '../../components/Container';
import SupplierCard from '../../components/SupplierCard';
import ProductCard from '../../components/ProductCard';
import ModalForProduct from '../../components/Modals/ModalForProduct';
import ModalForOrder from '../../components/Modals/ModalForOrder';
import Header from '../../components/Header';
import suppliers from '../../constants/suppliers';
import { useStore, useUserStore } from '../../zustand/userStore';

const LOCAL_STORAGE_KEY_BADGE_COUNT = 'badgeCount';

const HomePage = () => {
  const [isOrderModalOpen, setOrderModalOpen] = useState(false);
  const [selectedSupplier, setSelectedSupplier] = useState(null);
  const [isProductModalOpen, setProductModalOpen] = useState(false);
  const [redirected, setRedirected] = useState(false);
  const setBadgeCount = useStore(state => state.setBadgeCount);
  const { loading } = useUserStore();
  const navigate = useNavigate();

  useEffect(() => {
    if (isProductModalOpen || isOrderModalOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'visible';
    }
  }, [isProductModalOpen, isOrderModalOpen]);
  // логикa проверки токена и статуса аутентификации
  const checkAuthentication = () => {
    const token = localStorage.getItem('token');
    const isAuth = localStorage.getItem('isAuth') === 'true';
    return { token, isAuth };
  };

  useLayoutEffect(() => {
    const { token, isAuth } = checkAuthentication();

    if (!isAuth && !loading && !redirected) {
      setRedirected(true);
      // Если пользователь не аутентифицирован, перенаправляем его на страницу входа
      navigate('/');
    }

    if (token && isAuth && !loading && !redirected) {
      setRedirected(true);
      useUserStore.setState({ isAuth: true });
      navigate('/home');
    }
  }, [navigate, loading, redirected]);

  // Восстанавливаем badgeCount из localStorage, если он там есть
  useEffect(() => {
    const savedBadgeCount = localStorage.getItem(LOCAL_STORAGE_KEY_BADGE_COUNT);
    const parsedBadgeCount = parseInt(savedBadgeCount, 10);

    if (!isNaN(parsedBadgeCount)) {
      useStore.setState({ LOCAL_STORAGE_KEY_BADGE_COUNT: parsedBadgeCount });
      setBadgeCount(parsedBadgeCount);
    } else {
      // Если в локальном хранилище нет значения, установливаем BadgeCount в 0
      useStore.setState({ LOCAL_STORAGE_KEY_BADGE_COUNT: 0 });
      setBadgeCount(0);
    }
  }, [setBadgeCount]);

  if (loading) {
    return <Loader />; // Пока идет загрузка, показываем лоадер
  }
  // Обработчик клика по поставщику
  const handleSupplierClick = supplier => {
    setSelectedSupplier(supplier);
    setProductModalOpen(true);
  };

  // Обработчик открытия модального окна заказа
  const openOrderModal = () => {
    setOrderModalOpen(true);
    setProductModalOpen(false);
  };

  // Обработчик закрытия модального окна заказа
  const closeOrderModal = () => {
    setOrderModalOpen(false);
  };

  // Обработчик закрытия модального окна продукта
  const closeSupplierModal = () => {
    setSelectedSupplier(null);
    setProductModalOpen(false);
  };

  return (
    <Suspense fallback={<Loader />}>
      <Header onClick={openOrderModal} />
      <Container>
        {suppliers.map(supplier => (
          <SupplierCard
            key={supplier.id}
            name={supplier.name}
            logo={supplier.logo}
            onClick={() => handleSupplierClick(supplier)}
          />
        ))}

        {selectedSupplier && (
          <ModalForProduct
            isOpen={isProductModalOpen}
            onClose={closeSupplierModal}
          >
            {selectedSupplier.products.map(product => (
              <ProductCard
                key={product.id}
                product={product}
                selectedSupplier={selectedSupplier}
              />
            ))}
          </ModalForProduct>
        )}
      </Container>
      {isOrderModalOpen && (
        <ModalForOrder isOpen={isOrderModalOpen} onClose={closeOrderModal} />
      )}
    </Suspense>
  );
};

export default HomePage;

// Почему применён useLayoutEffect: когда просто набираешь в браузере адрес  http://localhost:5173/home,
// при использовании useEffect было секундное открытие HomePage, а затем уже происходил редирект на "/".
// Различие между useEffect и useLayoutEffect заключается во времени их выполнения во время жизненного цикла
// компонента.
// useEffect выполняется после того, как DOM обновлен и браузер уже отобразил изменения на странице.
// Поэтому при использовании useEffect, браузер мог видеть короткую миграцию страницы, прежде чем произойдет
// перенаправление.
// С другой стороны, useLayoutEffect выполняется перед тем, как браузер отобразит изменения на странице.
// Он срабатывает синхронно с обновлением DOM. Используя useLayoutEffect, мы можем избежать момента отображения
// компонента до срабатывания проверок и перенаправлений.
// В нашем случае, использование useLayoutEffect позволяет удержать перенаправление до того момента,
// когда все проверки аутентификации будут выполнены.
