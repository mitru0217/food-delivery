import styled from 'styled-components';

export const Button = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;

  min-width: 10rem;
  height: 4rem;
  color: ${p => p.theme.colors.mainWhite};
  background: ${p => p.theme.colors.primaryBtn};
  font-size: 1.4rem;
  padding: 1.6rem 3.2rem;
  border-radius: ${p => p.theme.radii.btnStandart};

  &:hover {
    background-color: ${p => p.theme.colors.btnHover};
  }
  &:active {
    outline: none;
    transform: scale(1.2);
  }

  &:focus {
    outline: none;
  }
  @media screen and (min-width: ${p => p.theme.breakpoints[1]}) {
    padding: 1.8rem 5.2rem;
    min-width: 13rem;
  }
  @media screen and (min-width: ${p => p.theme.breakpoints[2]}) {
    font-size: 1.6rem;
    padding: 2.3rem 5.2rem;
    min-width: 20rem;
    height: 6rem;
  }
`;
