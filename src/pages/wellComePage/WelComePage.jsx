import { useState } from 'react';
import { Container } from './WelComePage.styled';
import PrimaryButton from '../../components/Buttons/PrimaryButton';
import RegisterModal from '../../components/Modals/RegisterModal';
import { AnimatePresence } from 'framer-motion';
const WelComePage = () => {
  const [isOpen, setIsOpen] = useState(false)

  const toggleModal = () => {

    if (!isOpen) {
			document.body.style.overflow = 'hidden';
		} else {
			document.body.style.overflow = 'visible';
		}
    console.log("Toggling modal");
    setIsOpen(isOpen => !isOpen)
	};

  return (
    <>
 <Container>
      <PrimaryButton onClick={toggleModal}>Log In</PrimaryButton>
    </Container>
    <AnimatePresence  onExitComplete={() => setIsOpen(false)}>
      {isOpen && (
        <RegisterModal isOpen={isOpen}  toggleModal={toggleModal} />
      )}
    </AnimatePresence>
    </> 
  );
};

export default WelComePage;

