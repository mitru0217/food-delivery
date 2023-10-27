
import { Suspense, useState, useEffect } from 'react';
import Loader from '../../components/Loader';
import Container from '../../components/Container';
import SupplierCard from '../../components/SupplierCard';
import ProductCard from '../../components/ProductCard';
import ModalForProduct from '../../components/Modals/ModalForProduct';
import ModalForOrder from '../../components/Modals/ModalForOrder';
import Header from '../../components/Header';
import suppliers from '../../constants/suppliers';
import { useStore } from '../../zustand/store';

const LOCAL_STORAGE_KEY_BADGE_COUNT = 'badgeCount';

const HomePage = () => {
  const [isOrderModalOpen, setOrderModalOpen] = useState(false);
  const [selectedSupplier, setSelectedSupplier] = useState(null);
  const [isProductModalOpen, setProductModalOpen] = useState(false);
  const setBadgeCount = useStore((state) => state.setBadgeCount);

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

  // Обработчик клика по поставщику
  const handleSupplierClick = (supplier) => {
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

  useEffect(() => {
    if (isProductModalOpen || isOrderModalOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'visible';
    }
  }, [isProductModalOpen, isOrderModalOpen]);

  return (
    <Suspense fallback={<Loader />}>
      <Header onClick={openOrderModal} />
      <Container>
        {suppliers.map((supplier) => (
          <SupplierCard
            key={supplier.id}
            name={supplier.name}
            logo={supplier.logo}
            onClick={() => handleSupplierClick(supplier)}
          />
        ))}

        {selectedSupplier && (
          <ModalForProduct isOpen={isProductModalOpen} onClose={closeSupplierModal}>
            {selectedSupplier.products.map((product) => (
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
