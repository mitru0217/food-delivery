import { Suspense, useState } from 'react';

import Loader from '../../components/Loader';

import ModalForOrder from '../../components/Modals/ModalForOrder';
import Header from '../../components/Header';

const HomePage = () => {
  const [isOrderModalOpen, setOrderModalOpen] = useState(false);

  const openModal = () => {
    setOrderModalOpen(true);
  };
  const closeModal = () => {
    setOrderModalOpen(false);
  };
  return (
    <Suspense fallback={<Loader />}>
      <Header onClick={openModal} />
      {isOrderModalOpen && (
        <ModalForOrder isOpen={isOrderModalOpen} onClose={closeModal} />
      )}
    </Suspense>
  );
};

export default HomePage;
