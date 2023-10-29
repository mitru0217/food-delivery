import { useState } from 'react';
import PropTypes from 'prop-types';
import { ThemeProvider } from '@mui/material/styles';
import theme from '../../constants/themeMui';
import { ButtonWrapper, CartWrapper} from './ShoppingCart.styled';
import CartForm  from '../Forms/Checkout/CartForm';
import AddressForm from '../Forms/Checkout/AddressForm';
import CheckList from '../Forms/Checkout/CheckList/CheckList';
import PaymentForm from '../Forms/Checkout/PaymentForm/PaymentForm';
import renderProgressBar from '../ProgressBar/ProgressBar';
import Button from '@mui/material/Button';

const ShoppingCart = ({ isOpen }) => {

  const [step, setStep] = useState(1);
  const [isSubmitted, setIsSubmitted] = useState(false);

  if (!isOpen) return null;

  const nextStep = () => {
    setIsSubmitted(false);
    setStep(step + 1);
  };

  const prevStep = () => {
    setIsSubmitted(false);
    setStep(step - 1);
  };

  const handleFormSubmitSuccess = () => {
    setIsSubmitted(true); // устанавливается в true, когда форма отправляется
};

  const renderForm = () => {
    const commonProps = { onFormSubmitSuccess: handleFormSubmitSuccess}; // передаем callback
    switch (step) {
      case 1:
        return (
          <div style={{ display: step === 1 ? 'block' : 'none' }}>
          <CartForm {...commonProps} />
        </div>
        );
      case 2:
        return (
          <div style={{ display: step === 2 ? 'block' : 'none' }}>
          <AddressForm {...commonProps} />
        </div>
        );
      case 3:
        return (
          <div style={{ display: step === 3 ? 'block' : 'none' }}>
        <PaymentForm {...commonProps}/>
        </div>
        );
        case 4:
          return <CheckList  />;
        default:
          return null; 
    }
  };

  return (
<ThemeProvider theme={theme}>
<CartWrapper>
      {renderProgressBar(step)}
        {renderForm()}
      <ButtonWrapper>
        {step > 1 && <Button variant="contained" onClick={prevStep}>Previous</Button>}
        {step < 4 && <Button variant="contained" onClick={nextStep} disabled={!isSubmitted}>Next</Button>}
      </ButtonWrapper>
    </CartWrapper>
</ThemeProvider>
  );

  
};

export default ShoppingCart;

ShoppingCart.propTypes = {
  isOpen: PropTypes.bool,
  onClose: PropTypes.func,
};
