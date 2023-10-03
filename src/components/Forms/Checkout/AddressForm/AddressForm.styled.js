import styled from 'styled-components';
// import { StyledInput } from '../../../Input/Input.styled';
// import { SelectStyled } from '../../../Select/';
// import { ButtonStyled } from '../../../Buttons/SecondaryButton/SecondaryButton.styled';

export const FormContainer = styled.div`
  display: grid;
  grid-template-columns: [labels] auto [controls] 1fr;
  grid-auto-flow: row;
  grid-gap: 0.8em;
  background: beige;
  padding: 1.2em;
  align-items: center;
  justify-content: flex-end;
`;

// export const AddressFormInput = styled(StyledInput)`
//   grid-column: controls;
//   grid-row: auto;
// `;

// export const AddressFormSelect = styled(SelectStyled)`
//   grid-column: controls;
//   grid-row: auto;
//   padding: 0.4em;
//   border: 0;
// `;

export const AddressFormButton = styled.button`
  grid-column: span 2;
  justify-self: end;
`;
export const AddressFormLabel = styled.label`
  grid-column: labels;
`;

export const AddressFormFieldset = styled.fieldset`
  grid-column: labels;
  grid-row: auto;
  grid-column: span 2;
`;

{
  /* <form class="myForm">
  <label for="customer_name">Name </label>
  <input type="text" name="customer_name" id="customer_name" required>
<label for="phone_number">Phone </label>
  <input type="tel" name="phone_number" id="phone_number">
<fieldset>
    <legend>Enter the Address</legend>
<label for="pickup_place">Pickup Place</label>
  <select name="pickup_place" id="pickup_place">
    <option value="" selected="selected">Select One</option>
    <option value="office" >Taxi Office</option>
    <option value="town_hall" >Town Hall</option>
    <option value="telepathy" >We'll Guess!</option>
  </select>
  <label for="pickup_place">Pickup Place</label>
  <select name="pickup_place" id="pickup_place">
    <option value="" selected="selected">Select One</option>
    <option value="office" >Taxi Office</option>
    <option value="town_hall" >Town Hall</option>
    <option value="telepathy" >We'll Guess!</option>
  </select>
  <label for="pickup_place">Pickup Place</label>
  <select name="pickup_place" id="pickup_place">
    <option value="" selected="selected">Select One</option>
    <option value="office" >Taxi Office</option>
    <option value="town_hall" >Town Hall</option>
    <option value="telepathy" >We'll Guess!</option>
  </select>
  </fieldset>
<button>Submit Booking</button>
    </form> */
}

//  .myForm {
//     display: grid;
//     grid-template-columns: [labels] auto [controls] 1fr;
//     grid-auto-flow: row;
//     grid-gap: .8em;
//     background: beige;
//     padding: 1.2em;
//     align-items: center; /* Выравнивание элементов по нижнему краю контейнера */
//   justify-content: end;
//   }
// .myForm > label,
// .myForm > fieldset  {
//   grid-column: labels;
//   grid-row: auto;
// }
// .myForm > input,
// .myForm > select,
//  {
//   grid-column: controls;
//   grid-row: auto;
//   padding: .4em;
//   border: 0;
// }
// .myForm > fieldset,
// .myForm > button {
//   grid-column: span 2;
// }
// .myForm > button {
//   padding: 1em;
//   background: darkkhaki;
//   border: 0;
//   color: white;
//   width: 100px;
//   justify-self: end;
//   }
