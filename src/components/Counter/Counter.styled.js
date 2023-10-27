import styled from '@emotion/styled'

export const StyledButton = styled.button`
width: 2rem;
height: 2rem;
border-radius: 50%;
border: none;
color: ${p => p.theme.colors.mainWhite};
display: flex;
justify-content: center;
align-items: center;
font-size: 1.5rem;
font-weight: 900;
`;

export const StyledCounter = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    gap: 0.5rem;
   
`;

export const StyledCount = styled.p`
    font-size: 2rem;
    font-weight: bold;
    /* color: ${p => p.theme.colors.mainGreen}; */
    color: #3f51b5;
`;

export const StyledMinusButton = styled(StyledButton)`
    background-color: ${p => p.theme.colors.error};
`;

export const StyledPlusButton = styled(StyledButton)`
    background-color: ${p => p.theme.colors.secondaryGreen};
`;


