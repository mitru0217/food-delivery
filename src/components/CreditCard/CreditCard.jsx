import { useState } from 'react';
import {
  Title,
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
} from './CreditCard.styled';

const CreditCard = ({
  name,
  cardNumber,
  expirityDate,
  securityCode,
  cardType,
  // isFront,
}) => {
  const [isFront, setIsFront] = useState(true);

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

  const toggleCard = () => {
    setIsFront(!isFront);
  };

  return (
    <>
      <Container>
        <Title>Payment Information</Title>
        <Card isFlipped={!isFront} onClick={toggleCard}>
          {isFront ? (
            <Front>
              <Up style={{ backgroundColor: bgColorUp }}>
                <Chip />
                {cardType && (
                  <CardIcon
                    src={`../../assets/${cardType}.svg`}
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
                  {cardNumber.replace(
                    /(.{4})/g,
                    '$1 '
                  ).slice(0, 19) /* Разбиваем номер карты на блоки по 4 цифры с пробелами */ ||
                    'xxxx xxxx xxxx xxxx'}
                </CardNumber>
                <NameText>cardholder name</NameText>
                <Name>{name || 'Your name'}</Name>
                <Expiration>Expirity Date </Expiration>
                <ExpirationDate>{expirityDate || 'month/year'}</ExpirationDate>
              </Down>
            </Front>
          ) : null}

          {isFront ? null : (
            <Back style={{ backgroundColor: bgColorDown }}>
              <Strip />
              <Wrapper>
                <WrapperName>
                  <BackName>{name || 'Your Name'}</BackName>``
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

export default CreditCard;
