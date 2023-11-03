import styled from '@emotion/styled';


export const LogOutButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 1rem;
  background: transparent;
  padding: 1rem;
  font-size: 1.8rem;
  font-weight: 700;
  color: ${p => p.theme.colors.mainWhite};
  width: 12rem;
  &:hover {
    color: ${p => p.theme.colors.mainGrey};;
    text-decoration: underline;
  }
`;
