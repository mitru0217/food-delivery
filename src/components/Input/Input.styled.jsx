import styled from 'styled-components';

export const StyledInputContainer = styled.div`
  position: relative;
  margin-bottom: 3rem;
`;

export const StyledInput = styled.input.attrs(props => ({
  $hasValue: props.value || props.isFocused,
  onFocus: props.onFocus,
  onBlur: props.onBlur,
}))`
  /* width: 30%; */
  padding: 1.5rem;
  border: none;
  border-bottom: 1px solid;
  border-bottom-color: ${({ $hasValue, theme }) =>
    $hasValue ? theme.colors.secondaryBtn : theme.colors.mainGrey};
  outline: none;
  font-size: 1.6rem;
  &:focus {
    border-bottom: 1px solid ${({ theme }) => theme.colors.secondaryBtn};
  }

  &:focus ~ span,
  &:hover ~ span {
    top: -1rem;
    font-size: 1.2rem;
    transform: translateY(-50%);
    color: ${p => p.theme.colors.secondaryBtn};
  }
`;

export const StyledPlaceholder = styled.span`
  position: absolute;
  top: ${({ $hasValue }) => ($hasValue ? '-1rem' : '50%')};
  left: 1rem;
  transform: translateY(${({ $hasValue }) => ($hasValue ? '-50%' : '0')});
  font-size: ${({ $hasValue }) => ($hasValue ? '1.2rem' : '1.6rem')};
  color: ${({ $hasValue, theme }) =>
    $hasValue ? theme.colors.secondaryBtn : theme.colors.mainGrey};
  transition: all 0.2s ease-in-out;
`;
