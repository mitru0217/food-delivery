import { Suspense, useState, useEffect } from 'react';
import Loader from '../../components/Loader';
import  Container  from '../../components/Container';
import SupplierCard from '../../components/SupplierCard';
import ProductCard from '../../components/ProductCard';
import ModalForProduct from '../../components/Modals/ModalForProduct';
import ModalForOrder from '../../components/Modals/ModalForOrder';
import Header from '../../components/Header';
import suppliers from '../../constants/suppliers'

const HomePage = () => {
  const [isOrderModalOpen, setOrderModalOpen] = useState(false);
  const [selectedSupplier, setSelectedSupplier] = useState(null);
  const [isProductModalOpen, setProductModalOpen] = useState(false);
  
const handleSupplierClick = (supplier) => {
    setSelectedSupplier(supplier);
    setProductModalOpen(true);
  };

  const closeSupplierModal = () => {
    setSelectedSupplier(null);
    setProductModalOpen(false);
  };
  useEffect(() => {
    if (isProductModalOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'visible';
    }
  }, [isProductModalOpen]);

// Modal for Order
  const openOrderModal = () => {
    setOrderModalOpen(true);
    setProductModalOpen(false)
  };
  const closeOrderModal = () => {
    setOrderModalOpen(false);
  };
  useEffect(() => {
    if (isOrderModalOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'visible';
    }
  }, [isOrderModalOpen]);

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
        <ModalForProduct  isOpen={isProductModalOpen} onClose={closeSupplierModal}>
          {selectedSupplier.products.map((product) => (
            <ProductCard key={product.id} product={product} selectedSupplier={selectedSupplier} />
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






