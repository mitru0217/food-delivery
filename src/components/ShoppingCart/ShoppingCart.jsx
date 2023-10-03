import { useState } from 'react';
import PropTypes from 'prop-types';

import { CartWrapper } from './ShoppingCart.styled';
import AddressForm from '../Forms/Checkout/AddressForm';
// import PaymentForm from '../Forms/Checkout/PaymentForm';
import OrderForm from '../Forms/Checkout/OrderForm/OrderForm';
import PaymentForm from '../Forms/Form/PayForm';
const ShoppingCart = ({ isOpen }) => {
  const [step, setStep] = useState(1);
  if (!isOpen) return null; //See comments 1.item

  const nextStep = () => {
    setStep(step + 1);
  };

  const prevStep = () => {
    setStep(step - 1);
  };
  const renderForm = () => {
    switch (step) {
      case 1:
        return <AddressForm />;
      case 2:
        return <PaymentForm />;
      case 3:
        return <OrderForm />;
      default:
        return null;
    }
  };

  return (
    <CartWrapper>
      {renderForm()}
      <div className="buttons">
        {step > 1 && <button onClick={prevStep}>Previous</button>}
        {step < 3 && <button onClick={nextStep}>Next</button>}
      </div>
    </CartWrapper>
  );
};

export default ShoppingCart;

ShoppingCart.propTypes = {
  isOpen: PropTypes.bool,
  onClose: PropTypes.func,
};
