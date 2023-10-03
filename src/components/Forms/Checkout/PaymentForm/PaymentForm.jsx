import { useState } from 'react';
import { useForm, FormProvider } from 'react-hook-form';
import Input from '../../../Input';
import SecondaryButton from '../../../Buttons/SecondaryButton';
import { Error } from '../../../Utils/utils.styled';
import { PayForm } from './PaymentForm.styled';
import CreditCard from '../../../CreditCard/CreditCard';
import { CardNumberMask } from '../../../Utils';
const PaymentForm = () => {
  const methods = useForm();
  const [isFront, setIsFront] = useState(true);
  const [cardNumber, setCardNumber] = useState('');
  const [name, setName] = useState('');
  const [expiration, setExpiration] = useState('');
  const [securityCode, setSecurityCode] = useState('');
  const [formattedCard, setFormattedCard] = useState('');
  const [cardType, setCardType] = useState(null);

  const handelNameChange = e => {
    const { value } = e.target;
    // setName(value);
  };

  const handleNumberChange = e => {
    const { value } = e.target;
    const formatted = value
      .replace(/\D/g, '') // Убираем все не-цифры из значения
      .slice(0, 16); // Обрезаем до 16 символов (максимальная длина номера карты)
    setCardNumber(formatted);
    for (const card of CardNumberMask) {
      const regex = new RegExp(card.regex);
      if (regex.test(value)) {
        setCardType(card.cardtype);
        return;
      }
    }
    setFormattedCard(formatted || '');
    setCardType(null);
  };

  const handleExpirationDateChange = e => {
    const { value } = e.target;
    const formattedVal = value
      .replace(/\D/g, '')
      .slice(0, 4)
      .replace(/(\d{2})(\d{2})/, '$1/$2'); // Разбиваем дату на месяц и год
    setExpiration(formattedVal);
  };
  const toggleCardSide = code => {
    if (code.trim() !== '') {
      setIsFront(false); // Переворачиваем карту на "заднюю" сторону
    } else {
      setIsFront(true); // Возвращаем карту на "лицевую" сторону
    }
  };
  const handleSecurityCode = e => {
    const { value } = e.target;
    const formattedVal = value.replace(/\D/g, '').slice(0, 3);
    setSecurityCode(formattedVal);
    toggleCardSide(formattedVal);
  };

  const handleSubmit = async data => {
    console.log(data);
    methods.reset();
    await methods.clearErrors();
  };

  return (
    <FormProvider {...methods}>
      <CreditCard
        name={name}
        cardNumber={cardNumber}
        expiration={expiration}
        securityCode={securityCode}
        cardType={cardType}
        // isFront={isFront}
      />
      <PayForm onSubmit={methods.handleSubmit(handleSubmit)}>
        <Input
          ref={methods.register('input')}
          name="name"
          type="text"
          placeholder="Card Owner"
          {...methods.register('name', {
            required: 'This field is required',
          })}
          onChange
          // autoComplete="off"
        />
        <Input
          ref={methods.register('input')}
          name="cardNumber"
          // type="numeric"
          placeholder="Card Number"
          {...methods.register('cardNumber', {
            required: 'This field is required',
            minLength: {
              value: 16,
              message: 'Enter at least 16 digits',
            },
          })}
          // autoComplete="off"
        />
        <Input
          ref={methods.register('input')}
          name="expirityDate"
          type="text"
          placeholder="Expirity Date"
          {...methods.register('date', {
            required: 'This field is required',
            pattern: {
              value: /^(0[1-9]|1[0-2])\/\d{2}$/,
              message: 'Invalid date format (e.g., 07/24)',
            },
          })}
          onChangeExpirationDate={handleExpirationDateChange}
          autoComplete="off"
        />
        <Input
          ref={methods.register('input')}
          name="securitycode"
          type="text"
          //        value={securityCode}
          onChange={handleSecurityCode}
          
          placeholder="CVV"
        />
        {(methods.formState.errors.card || methods.formState.errors.date) && (
          <Error>Please fill out all required fields.</Error>
        )}
        {methods.formState.errors.card?.type === 'minLength' && (
          <Error>Enter at least 19 digits</Error>
        )}
        <SecondaryButton type="submit">Submit</SecondaryButton>
      </PayForm>
    </FormProvider>
  );
};

export default PaymentForm;

//  <FormContainer>
//    <FieldContainer>
//      <Label htmlFor="name">Name</Label>
//      <Input
//        id="name"
//        maxLength="20"
//        type="text"
//        value={name}
//        onChange={e => setName(e.target.value)}
//      />
//    </FieldContainer>
//    <FieldContainer>
//      <Label htmlFor="cardnumber">Card Number</Label>
//      <Input
//        id="cardnumber"
//        type="text"
//        value={cardNumber}
//        onChange={e => {
//          const inputVal = e.target.value;
//          const formattedVal = inputVal
//            .replace(/\D/g, '') // Убираем все не-цифры из значения
//            .slice(0, 16); // Обрезаем до 16 символов (максимальная длина номера карты)
//          setCardNumber(formattedVal);
//          for (const card of CardNumberMask) {
//            const regex = new RegExp(card.regex);
//            if (regex.test(inputVal)) {
//              setCardType(card.cardtype);
//              return;
//            }
//          }
//          setCardType(null);
//        }}
//      />
//    </FieldContainer>
//    <FieldContainer>
//      <Label htmlFor="expirationdate">Expiration (mm/yy)</Label>
//      <Input
//        id="expirationdate"
//        value={expiration}
//        onChange={e => {
//          const inputVal = e.target.value;
//          const formattedVal = inputVal
//            .replace(/\D/g, '')
//            .slice(0, 4)
//            .replace(/(\d{2})(\d{2})/, '$1/$2'); // Разбиваем дату на месяц и год
//          setExpiration(formattedVal);
//        }}
//        type="text"
//      />
//    </FieldContainer>
//    <FieldContainer>
//      <Label htmlFor="securitycode">Security Code</Label>

//      <Input
//        id="securitycode"
//        type="text"
//        value={securityCode}
//        onChange={e => {
//          const inputVal = e.target.value;
//          const formattedVal = inputVal.replace(/\D/g, '').slice(0, 3);
//          setSecurityCode(formattedVal);
//          toggleCardSide(formattedVal);
//        }}
//      />
//    </FieldContainer>
//  </FormContainer>;

// const handleCardChange = event => {
//   const { value } = event.target;
//   // Удаляем все нецифровые символы из введенного значения
//   const cardNumber = value.replace(/\D/g, '');

//   // Добавляем дефисы после каждых четырех цифр
//   const formatted = cardNumber
//     .match(/.{1,4}/g)
//     ?.join('-')
//     .substr(0, 19); // Максимальная длина номера карты

//   setFormattedCard(formatted || '');
// };
