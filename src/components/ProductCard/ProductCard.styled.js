import styled from '@emotion/styled';

export const CardContainer = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  gap: 3rem;
`;
export const Card = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: flex-start;
  width: 350px;
  max-width: 100%;
  min-height: 400px;
  height: 300px;
  background: #fff;
  border-radius: 20px;
  transition: 0.5s;
  background: rgb(2, 0, 36);
  background: linear-gradient(
    63deg,
    rgba(2, 0, 36, 1) 0%,
    rgba(179, 230, 215, 1) 58%,
    rgba(0, 212, 255, 1) 100%
  );
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
  height: ${props => (props.isHovered ? '400px' : '300px')};

  @media (max-width: 480px) {
    width: 230px;
    border-radius: 15px;
  }
`;

export const ImgBox = styled.div`
  position: absolute;
  top: 20px;
   display: flex; 
  align-items: center; 
  justify-content: center; 
  width: 300px;
  border-radius: 50%;
  overflow: hidden;
  z-index: 2;
  transition: 0.5s;
  transform: ${props => props.isHovered ? 'translateY(-120px) scale(0.75)' : 'none'};
  margin-bottom: ${props => (props.isHovered ? '2rem' : '4rem')};
  @media (max-width: 480px) {
    width: 185px;

  }
`;

export const Image = styled.img`
  width: 90%;
  height: 90%;
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
  padding-bottom: 2.75rem;
  font-weight: 700;
  color: #009688;
  transition: 0.5s;
  padding-bottom: ${props => (props.isHovered ? '0.5rem' : '2.75rem')};
  font-size: ${props => (props.isHovered ? '2rem' : '2.5rem')};
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
