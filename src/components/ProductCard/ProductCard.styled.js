import styled from '@emotion/styled';

export const Card = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: flex-start;
  max-width: 100%;
  width: 23rem;
  min-height: 25rem;
  border-radius: ${p => p.theme.radii.cardStandart};
  transition: 0.5s;
  background: rgb(2, 0, 36);
  background: linear-gradient(
    63deg,
    rgba(2, 0, 36, 1) 0%,
    rgba(179, 230, 215, 1) 58%,
    rgba(0, 212, 255, 1) 100%
  );
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
  height: ${props => (props.isHovered ? '30rem' : '25rem')};

  @media (min-width: ${p => p.theme.breakpoints[1]}) {
    width: 35rem;
    min-height: 40rem;
    height: ${props => (props.isHovered ? '42.5rem' : '30rem')}; 
  }
`;

export const ImgBox = styled.div`
  position: absolute;
  top: 2rem;
   display: flex; 
  align-items: center; 
  justify-content: center; 
  width: 10rem;
  border-radius: 50%;
  overflow: hidden;
  z-index: 2;
  transition: 0.5s;
  transform: ${props => props.isHovered ? 'translateY(-90px) scale(0.75)' : 'none'};
  @media (min-width: ${p => p.theme.breakpoints[1]}) {
    
    width: 20rem;
  }
`;

export const Image = styled.img`
  width: 100%;
  height: 100%;
  object-fit: contain;
  border-radius: 50%;
  padding: 1rem;
`;

export const Content = styled.div`
  position: absolute;
  top: 252px;
  width: 100%;
  height: 6rem;
  padding: 0 30px;
  text-align: center;
  overflow: hidden;
  transition: 0.5s;
   top: ${props => (props.isHovered ? '100px' : '252px')};
   height: ${props => (props.isHovered ? '60rem' : '6rem')};
`;


export const Title = styled.h2`
  font-size: 2.5rem;
  font-weight: 700;
  color: #009688;
  transition: 0.5s;
  font-size: ${props => (props.isHovered ? '2rem' : '2.5rem')};
   /* Добавление градиента */
   background: rgb(2,0,36);
  background: linear-gradient(63deg, rgba(2,0,36,1) 0%, rgba(81,101,172,1) 58%, rgba(0,212,255,1) 100%);
  background-clip: text;
  color: transparent; /* Делаем текст прозрачным для отображения градиентного фона */
`;

export const Price = styled.p`
  color: #333;
  font-size: 2rem;
  text-align: flex-start;
  @media screen and (max-width: 480px) {
    font-size: 0.8rem;
  }
`;

export const Description = styled.p`
  color: #333;
  font-size: 2rem;
  text-align: center;
  @media screen and (max-width: 480px) {
    font-size: 0.8rem;
  }
`;
export const Wrapper = styled.div`
display: flex;
justify-content: center;
align-items: center;
gap: 1rem;
`
export const Quantity = styled.input`
 position: relative;
  top: 15px;
  width: 8rem;
  height: 3rem;
  font-size: 2rem;
  border: none;
  outline: none;
  color: #fff;
  border-radius: ${p => p.theme.radii.btnStandart};
  background-color: ${p => p.theme.colors.secondaryBtn};
  text-align: center;
  &:hover {
    background-color: ${p => p.theme.colors.btnHover};
  }
  &:active {
    outline: none;
    transform: scale(1.2);
  }
`

export const ButtonAddToCart = styled.button`
  position: relative;
  top: 15px;
  width: 15rem;
  padding: 1rem 1rem;
  font-size: 2rem;
  color: #fff;
  font-weight: 500;
  background-color: ${p => p.theme.colors.secondaryBtn};
  border-radius: ${p => p.theme.radii.btnStandart};
  &:hover {
    background-color: ${p => p.theme.colors.btnHover};
  }
  &:active {
    outline: none;
    transform: scale(1.2);
  }
`;
