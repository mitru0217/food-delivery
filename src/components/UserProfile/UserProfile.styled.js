import styled from '@emotion/styled'


export const ProfileContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 25rem;
  
`
export const GreetingWrapper = styled.div`
display: flex;
align-items: center;
justify-content : center;
gap: 1rem;
width: 10rem
`



export const Greeting = styled.h2`
    font-size: 1.5rem;
    font-weight: 700;
    color: ${p => p.theme.colors.mainWhite};
`


