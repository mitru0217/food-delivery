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
align-items: center;
padding: 2rem;
`
export const BtnWrapper = styled.div`
  width: 30rem;
  display: flex;
  justify-content: space-between;
  align-items: center;

  @media screen and (min-width: ${p => p.theme.breakpoints[2]}) {
    width: 50rem;
  }
`;
