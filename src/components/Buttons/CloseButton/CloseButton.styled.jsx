import styled from 'styled-components';

export const ButtonStyled = styled.button`
  position: absolute;
  top: 10%;
  right: 10%;
  width: 5rem;
  height: 5rem;
  border-radius: 50%;
  background-color: ${p => p.theme.colors.mainGrey};
  transition: background-color 0.3s ease;

  &:hover {
    background-color: ${p => p.theme.colors.btnHover};
  }
`;
