import { Button } from './PrimaryButton.styled';
import PropTypes from 'prop-types';

const PrimaryButton = ({ children, onClick }) => {
  return <Button onClick={onClick}>{children}</Button>;
};

PrimaryButton.propTypes = {
  children: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
};

export default PrimaryButton;
