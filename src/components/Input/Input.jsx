import React, { useState } from 'react';
import PropTypes from 'prop-types';
// import { useForm } from 'react-hook-form';
import { useFormContext, Controller } from 'react-hook-form';
import {
  StyledInputContainer,
  StyledInput,
  StyledPlaceholder,
} from './Input.styled';
import { formatPhoneNumberForDisplay } from '../Utils';
import { CardNumberMask } from '../Utils';

const Input = React.forwardRef(({ name, type, placeholder }, ref) => {
  const [focused, setFocused] = useState(false);
  const [cardType, setCardType] = useState(null);
  const { control } = useFormContext();

  return (
    <StyledInputContainer>
      <Controller
        name={name}
        control={control}
        defaultValue=""
        render={({ field: { onChange, value } }) => {
          const handleInputChange = event => {
            let inputValue = event.target.value;

            let formattedValue = inputValue;

            if (name === 'card') {
              // Форматируем номер карты (удаляем все нецифровые символы и добавляем дефисы)
              formattedValue = inputValue
                .replace(/\D/g, '')
                .replace(/(.{4})/g, '$1-');
            }
            if (type === 'tel') {
              // Форматируем номер телефона (например, formatPhoneNumberForDisplay)
              formattedValue = formatPhoneNumberForDisplay(inputValue);
            }
            if (name === 'name') {
              formattedValue = inputValue.replace(/[^a-zA-Z\s]/g, ''); // Удаляем все цифры
            }
            if (name === 'cardNumber') {
              formattedValue = inputValue
                .replace(/\D/g, '') // Убираем все не-цифры из значения
                .slice(0, 16);

              for (const card of CardNumberMask) {
                const regex = new RegExp(card.regex);
                if (regex.test(formattedValue)) {
                  setCardType(card.cardtype);
                  return;
                }
              }
              setCardType(null);
            }
            if (name === 'expirityDate') {
              formattedValue = inputValue.replace(/^(0[1-9]|1[0-2])\/\d{2}$/);
            }
          };
          return (
            <>
              <StyledInput
                type="text"
                value={value}
                onChange={handleInputChange}
                onFocus={() => setFocused(true)}
                onBlur={() => setFocused(false)}
                $hasValue={!!value}
              />
              <StyledPlaceholder hasValue={value}>
                {placeholder}
              </StyledPlaceholder>
            </>
          );
        }}
      />
    </StyledInputContainer>
  );
});

Input.displayName = 'input';

Input.propTypes = {
  name: PropTypes.string.isRequired,
  type: PropTypes.string,
  placeholder: PropTypes.string.isRequired,
};

export default Input;
