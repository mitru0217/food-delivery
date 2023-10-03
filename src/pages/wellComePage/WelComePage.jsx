import { useNavigate } from 'react-router-dom';
import { Container } from './WelComePage.styled';
import PrimaryButton from '../../components/Buttons/PrimaryButton';

const WelComePage = () => {
  const navigate = useNavigate();
  const handleClick = () => {
    navigate('/home');
  };
  return (
    <Container>
      <PrimaryButton onClick={handleClick}>Welcome</PrimaryButton>
    </Container>
  );
};

export default WelComePage;
