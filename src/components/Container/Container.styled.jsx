import styled from '@emotion/styled'


export const StyledContainer = styled.div`
display: flex;
flex-wrap: wrap;
align-items: center;
justify-content: center;
gap: 2rem;  
width: 100%;
max-width: 1170px;
margin: 0 auto;
padding: 12rem 3rem;
@media screen and (min-width: ${p => p.theme.breakpoints[1]}) {
    justify-content:space-evenly;
   flex-direction: row;
   flex-wrap: wrap;
  
}
 @media screen and (min-width: ${p => p.theme.breakpoints[2]}) {
    justify-content: space-between;
    padding: 15rem 3rem;
}
`;
