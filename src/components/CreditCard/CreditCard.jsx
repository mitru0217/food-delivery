
import PropTypes from 'prop-types';
import {
  Container,
  Card,
  Front,
  Chip,
  Up,
  Down,
  Wave,
  CardNumber,
  NumberText,
  NameText,
  Name,
  Expiration,
  ExpirationDate,
  Back,
  Strip,
  Wrapper,
  WrapperName,
  BackName,
  CodeWrapper,
  Cvv,
  CardIcon,
  ChipIcon,
} from './CreditCard.styled';
import cardImages from '../Utils/cardImages';
import imgChip from '../../assets/icons/chip.svg';

const CreditCard = ({
  cardHolderName,
  cardNumber,
  expiryDate,
  securityCode,
  cardType,
  isFront,
  toggleCard
}) => {


  let bgColorUp = '#bdbdbd';
  let bgColorDown = '#616161';
  let filling = '#616161';

  switch (cardType) {
    case 'mastercard':
      bgColorUp = '#03A9F4';
      bgColorDown = '#0288D1';
      filling = '#0288D1';
      break;
    case 'visa':
      bgColorUp = '#D4E157';
      bgColorDown = '#AFB42B';
      filling = '#AFB42B';
      break;
    case 'maestro':
      bgColorUp = '#FFEB3B';
      bgColorDown = '#F9A825';
      filling = '#F9A825';
      break;
  }

  return (
    <>
      <Container>
        <Card isFlipped={!isFront} onClick={toggleCard}>
          {isFront ? (
            <Front>
              <Up style={{ backgroundColor: bgColorUp }}>
                <Chip>
                <ChipIcon src={imgChip} alt="chip" width="60" height="40" />
                </Chip>

                {cardType && (
                  <CardIcon
                    src={cardImages[cardType]} 
                    alt={cardType}
                    width="60"
                    height="40"
                  />
                )}
              </Up>
              <Down style={{ backgroundColor: bgColorDown }}>
                <Wave xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
                  <path
                    style={{ fill: filling }}
                    d="M0,32L60,37.3C120,43,240,53,360,74.7C480,96,600,128,720,144C840,160,960,160,1080,154.7C1200,149,1320,139,1380,133.3L1440,128L1440,320L1380,320C1320,320,1200,320,1080,320C960,320,840,320,720,320C600,320,480,320,360,320C240,320,120,320,60,320L0,320Z"
                  ></path>
                </Wave>
                <NumberText>card number</NumberText>
                <CardNumber>
                  {cardNumber
                    .replace(/(.{4})/g, '$1 ')
                    .slice(
                      0,
                      19
                    ) /* Разбиваем номер карты на блоки по 4 цифры с пробелами */ ||
                    'xxxx xxxx xxxx xxxx'}
                </CardNumber>
                <NameText>cardholder name</NameText>
                <Name>{cardHolderName || 'Your name'}</Name>
                <Expiration>Expiry Date </Expiration>
                <ExpirationDate>{expiryDate .replace(/\D/g, '')
                  .slice(0, 4)
                  .replace(/(\d{2})(\d{2})/, '$1/$2') || 'month/year'}</ExpirationDate>
              </Down>
            </Front>
          ) : null}

          {isFront ? null : (
            <Back style={{ backgroundColor: bgColorDown }}>
              <Strip />
              <Wrapper>
                <WrapperName>
                  <BackName>{cardHolderName || 'Your Name'}</BackName>``
                </WrapperName>
                <CodeWrapper>
                  <Cvv>{securityCode || 'CVV'}</Cvv>
                </CodeWrapper>
              </Wrapper>
            </Back>
          )}
        </Card>
      </Container>
    </>
  );
};
CreditCard.propTypes = {
  cardHolderName: PropTypes.string.isRequired,
  cardNumber: PropTypes.string.isRequired,
  expiryDate: PropTypes.string.isRequired,
  securityCode: PropTypes.string.isRequired,
  cardType: PropTypes.string,
  isFront: PropTypes.bool.isRequired,
  toggleCard: PropTypes.func.isRequired,
};
export default CreditCard;
