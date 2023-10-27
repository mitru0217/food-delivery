import styled from '@emotion/styled'
import { AiOutlineCloseCircle } from 'react-icons/ai';

export const ButtonStyled = styled.button`
  position: absolute;
  top: 3%;
  right: 2%;
  width: 3rem;
  height: 3rem;
  border-radius: 50%;
  background-color: ${p => p.theme.colors.mainGrey};
  transition: background-color 0.3s ease;

  &:hover {
    background-color: ${p => p.theme.colors.btnHover};
  }
  @media screen and (min-width: ${p => p.theme.breakpoints[1]}) {
    top: 2%;
  right: 3%;
  width: 5rem;
  height: 5rem;
  }
`;

export const CloseIcon = styled(AiOutlineCloseCircle)`
  width: 100%;
  height: 100%;
  color: ${p => p.theme.colors.mainWhite};
  transition: color 0.3s ease;
  /* &:hover {
    color: ${p => p.theme.colors.btnHover};
  } */
  `