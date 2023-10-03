import { useState } from 'react';
import { useForm, FormProvider } from 'react-hook-form';
import { Form } from '../../Form/Form.styled';
import { FormContainer } from './AddressForm.styled';
import Input from '../../../Input';
// import SecondaryButton from '../../../Buttons/SecondaryButton';
import { Error } from '../../../Utils/utils.styled';
import Select from '../../../Select/Select';
import { Cities, CityData } from '../../../Utils/';
import {
  AddressFormFieldset,
  AddressFormLabel,
  AddressFormButton,
} from './AddressForm.styled';

const AddressForm = () => {
  const methods = useForm();
  const [selectedCity, setSelectedCity] = useState('');
  const [streetsInCity, setStreetsInCity] = useState([]);
  const [selectedStreet, setSelectedStreet] = useState('');
  const [houseNumbers, setHouseNumbers] = useState([]);

  const handleSubmit = async data => {
    console.log(data);
    methods.reset();
    await methods.clearErrors();
  };
  const handleCityChange = selectedCity => {
    setSelectedCity(selectedCity);

    // Получаем данные для выбранного города из объекта CityData
    const cityData = CityData[selectedCity];
    if (cityData) {
      setStreetsInCity(cityData.streets);
      setHouseNumbers(cityData.houseNumbers);
    } else {
      setStreetsInCity([]);
      setHouseNumbers([]);
    }
  };

  return (
    <FormProvider {...methods}>
      <Form onSubmit={methods.handleSubmit(handleSubmit)}>
        <FormContainer>
          <Input
            ref={methods.register('input')}
            name="name"
            type="text"
            placeholder="Name"
            {...methods.register('name', {
              required: 'This field is required',
            })}
            autoComplete="off"
            style={{ gridColumn: 'controls', gridRow: 'auto' }}
          />
          <Input
            ref={methods.register('input')}
            name="phone"
            type="tel"
            placeholder="Phone Number"
            {...methods.register('phone', {
              required: 'This field is required',
              minLength: {
                value: 12,
                message: 'Enter at least 12 digits',
              },
            })}
            autoComplete="off"
            style={{ gridColumn: 'controls', gridRow: 'auto' }}
          />
          {(methods.formState.errors.name ||
            methods.formState.errors.phone) && (
            <Error>Please fill out all required fields.</Error>
          )}
          {methods.formState.errors.phone?.type === 'minLength' && (
            <Error>Enter at least 12 digits</Error>
          )}

          <AddressFormFieldset>
            <legend>Enter the Address</legend>
            <AddressFormLabel htmlFor="city">Select the City</AddressFormLabel>
            <Select
              name="city"
              ref={methods.control.register}
              options={Cities}
              onChange={e => handleCityChange(e.target.value)}
              style={{ gridColumn: 'controls', gridRow: 'auto' }}
            />
            <AddressFormLabel htmlFor="street">
              Select the Street
            </AddressFormLabel>
            <Select
              name="street"
              ref={methods.control.register}
              onChange={e => setSelectedStreet(e.target.value)}
              disabled={!selectedCity}
              options={streetsInCity}
              style={{ gridColumn: 'controls', gridRow: 'auto' }}
            />
            <AddressFormLabel htmlFor="houseNumber">
              Select the Number of House
            </AddressFormLabel>
            <Select
              name="houseNumber"
              ref={methods.control.register}
              disabled={!selectedStreet}
              options={houseNumbers}
              style={{ gridColumn: 'controls', gridRow: 'auto' }}
            />
          </AddressFormFieldset>
          <AddressFormButton
            type="submit"
            style={{ gridColumn: 'span 2', justifySelf: 'end' }}
          >
            Submit
          </AddressFormButton>
        </FormContainer>
      </Form>
    </FormProvider>
  );
};

export default AddressForm;
{
  /* <Select name="City" label="Select the City" options={Cities} /> */
}
