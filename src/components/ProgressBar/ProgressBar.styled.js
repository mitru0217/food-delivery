import styled from '@emotion/styled'

export const ProgressBar = styled.div`
display: flex;
justify-content: center;
align-items: center;
margin-bottom: 2rem;;
`;

export const Circle = styled.div`
width: 2rem;
height: 2rem;
border-radius: 50%;
background-color: ${({ active }) => (active ? '#007bff' : '#dee2e6')};
color: ${({ active }) => (active ? '#fff' : '#6c757d')};
display: flex;
justify-content: center;
align-items: center;
margin-right: 1rem;
font-size: 1.5rem;
font-weight: bold;
@media screen and (min-width: ${p => p.theme.breakpoints[1]}) {
    width: 2rem;
    height: 2rem;
    font-size: 1.5rem;
  }
`;

export const Line = styled.div`
width: 3rem;
border: 2px solid #000;
@media screen and (min-width: ${p => p.theme.breakpoints[1]}) {
    width: 10rem;

  }
`
export const Arrowhead = styled.div`
    width: 0;
    height: 0;
    border-top: 10px solid transparent;
    border-bottom: 10px solid transparent;
    border-left: 10px solid #000;
    margin-right:  1rem;
  `;
  