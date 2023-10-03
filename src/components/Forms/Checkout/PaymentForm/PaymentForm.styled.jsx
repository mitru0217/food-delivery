import styled from 'styled-components';
import { Form } from '../../Form/Form.styled';

export const PayForm = styled(Form)`
  display: grid;
  place-items: center;
  grid-column-gap: 1rem;
  grid-template-columns: repeat(2, 1fr);
  grid-template-rows: repeat(2, 1fr);
  /* max-width: 40rem; */
  padding: 2rem;
  color: #707070;
`;
