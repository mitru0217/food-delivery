
import PropTypes from 'prop-types';

import { StyledPlusButton, StyledMinusButton, StyledCounter,StyledCount } from './Counter.styled';

  const Counter = ({ count, onIncrement, onDecrement }) => {
    return (
      <StyledCounter>
        
        <StyledMinusButton type='button' onClick={(event) => onDecrement(event)}>-</StyledMinusButton>
        <StyledCount>{count}</StyledCount>
        <StyledPlusButton type='button' onClick={(event) => onIncrement(event)}>+</StyledPlusButton>
      </StyledCounter>
    );
};

  Counter.propTypes = {
    count: PropTypes.number.isRequired,
    onIncrement: PropTypes.func.isRequired,
    onDecrement: PropTypes.func.isRequired,
  };
export default Counter;