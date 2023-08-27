import { Container } from './WelComePage.styled';
import PrimaryButton from '../../components/Buttons/PrimaryButton';
const WelComePage = () => {
  const handleClick = () => {
    console.log('Button clicked!');
  };
  return (
    <Container>
      <PrimaryButton onClick={handleClick}>Welcome</PrimaryButton>
    </Container>
  );
};

export default WelComePage;
