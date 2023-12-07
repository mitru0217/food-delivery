import styled from '@emotion/styled'

export const HeaderStyled = styled.header`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 10rem;
  background-color: ${p => p.theme.colors.mainGreen};
  @media screen and (min-width: ${p => p.theme.breakpoints[1]}) {
    justify-content: start;
  }
`;

export const HeaderContainer = styled.div`
display: flex;
justify-content: space-between;
gap:1rem;
align-items: center;
padding: 2rem;
`
export const BtnWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
gap: 1rem;
  @media screen and (min-width: ${p => p.theme.breakpoints[2]}) {
    width: 50rem;
  }
`;
