import styled from '@emotion/styled'

export const ButtonStyled = styled.div`
display: flex;
justify-content: center;
align-items: center;
gap: 0.5rem;
width: 8rem;
font-size: 1.5rem;
padding: 0.5rem;
border-radius: 0.5rem;
font-weight: ${p => p.theme.fontWeights[2]};
border-radius: ${p => p.theme.radii.btnStandart};
margin-bottom: 0.5rem;
`

export const ButtonWrapper = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: row;
 gap: 1rem;
 margin-top: 1rem
`