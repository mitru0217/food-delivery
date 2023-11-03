
import styled from '@emotion/styled'
export const Badge = styled.span`
  position: absolute;
  top: -5px;
  right: -5px;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 2rem;
  height:2rem;
  background-color: ${p => p.theme.colors.mainRed};
  font-size: 1.25rem;
  color: ${p => p.theme.colors.mainWhite};
  border-radius: 50%;
  padding: .3rem .6rem;
`;
