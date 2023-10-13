import styled from '@emotion/styled'


export const StyledContainer = styled.div`
display: flex;
flex-direction: column;
align-items: center;
gap: 2rem;  
width: 100%;
max-width: 1170px;
margin: 0 auto;
padding: 15rem 3rem;
@media screen and (min-width:767px) {
    justify-content:space-evenly;
   flex-direction: row;
   flex-wrap: wrap; 
}
 @media screen and (min-width:1200px) {
    justify-content: space-between;
}
`;
