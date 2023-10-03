import styled from 'styled-components';

export const CartWrapper = styled.div`
  background-color: ${p => p.theme.colors.mainWhite};
  border-radius: ${p => p.theme.radii.btnStandart};
  padding: 2rem;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
  max-width: 1000px;
  width: 80%;
`;
