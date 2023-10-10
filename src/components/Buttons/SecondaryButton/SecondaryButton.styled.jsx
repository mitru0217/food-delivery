import styled from 'styled-components';

export const ButtonStyled = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
  width: 5rem;
  padding: 1rem 1rem;
  font-size: 1.1rem;
  color: ${p => p.theme.colors.mainWhite};
  background-color: ${p => p.theme.colors.secondaryBtn};
  border-radius: ${p => p.theme.radii.btnStandart};
  position: relative;

  &:hover {
    background-color: ${p => p.theme.colors.btnHover};
  }
  &:active {
    outline: none;
    transform: scale(1.2);
  }

  @media screen and (min-width: ${p => p.theme.breakpoints[2]}) {
    font-size: 1.5rem;
    width: 8rem;
  }
`;
