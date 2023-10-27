import { useState } from 'react';
import PropTypes from 'prop-types';

import { ButtonWrapper, CartWrapper} from './ShoppingCart.styled';
import ProductBasketForm from '../Forms/Checkout/ProductBasketForm';
import AddressForm from '../Forms/Checkout/AddressForm';
import OrderForm from '../Forms/Checkout/OrderForm/OrderForm';
import PaymentForm from '../Forms/Checkout/PaymentForm/PaymentForm';
import SecondaryButton from '../Buttons/SecondaryButton/SecondaryButton';
import renderProgressBar from '../ProgressBar/ProgressBar';

const ShoppingCart = ({ isOpen }) => {
//   const [addressInfo, setAddressInfo] = useState({});
//   const [paymentInfo, setPaymentInfo] = useState({});
// const [orederedProducts, setOrderedProducts] = useState([]); 

  const [step, setStep] = useState(1);

  if (!isOpen) return null;

  const nextStep = () => {
    setStep(step + 1);
  };

  const prevStep = () => {
    setStep(step - 1);
  };


  const renderForm = () => {
    switch (step) {
      case 1:
        return (
          <div style={{ display: step === 1 ? 'block' : 'none' }}>
          <ProductBasketForm  />
        </div>
        );
      case 2:
        return (
          <div style={{ display: step === 2 ? 'block' : 'none' }}>
          <AddressForm  />
        </div>
        );
      case 3:
        return (
          <div style={{ display: step === 3 ? 'block' : 'none' }}>
        <PaymentForm />
        </div>
        );
        case 4:
          return <OrderForm  />;
        default:
          return null; 
    }
  };

  return (
    <CartWrapper>
      {renderProgressBar(step)}
        {renderForm()}
      <ButtonWrapper>
        {step > 1 && <SecondaryButton onClick={prevStep}>Previous</SecondaryButton>}
        {step < 4 && <SecondaryButton onClick={nextStep}>Next</SecondaryButton>}
      </ButtonWrapper>
    </CartWrapper>
  );
};

export default ShoppingCart;

ShoppingCart.propTypes = {
  isOpen: PropTypes.bool,
  onClose: PropTypes.func,
};
