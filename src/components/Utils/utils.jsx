export const formatPhoneNumberForDisplay = phoneNumber => {
  if (!phoneNumber) return '';
  const formattedPhoneNumber = phoneNumber.replace(/\D/g, ''); // Удаляем все нецифровые символы
  const countryCode = '380';
  const firstPart = formattedPhoneNumber.slice(3, 5);
  const secondPart = formattedPhoneNumber.slice(5, 8);
  const thirdPart = formattedPhoneNumber.slice(8, 12);
  return `+${countryCode} ${firstPart}${secondPart}${thirdPart}`;
};

export const Cities = [
  {
    value: 'vinnytsia',
    label: 'Vinnytsia',
  },
  {
    value: 'dnipro',
    label: 'Dnipro',
  },
  {
    value: 'Zaporozhye',
    label: 'Zaporozhye',
  },
  {
    value: 'kyiv',
    label: 'Kyiv',
  },
  {
    value: 'odesa',
    label: 'Odesa',
  },
];

export const CityData = {
  vinnytsia: {
    streets: [
      'V.Antonovycha str.',
      'Barvysta str.',
      'Berehova str.',
      'Bohomolʹtsya str.',
      'Botanichna str.',
    ],
    houseNumbers: [
      '1',
      '2',
      '3',
      '4',
      '5',
      '6',
      '7',
      '8',
      '9',
      '10',
      '11',
      '12',
      '13',
      '14',
      '15',
    ],
  },
  dnipro: {
    streets: [
      'Aviatsiyna str.',
      'Barykadna str. ',
      'Vynohradna',
      'Donetsʹke shose str.',
      'Enerhetychna',
    ],
    houseNumbers: [
      '1',
      '2',
      '3',
      '4',
      '5',
      '6',
      '7',
      '8',
      '9',
      '10',
      '11',
      '12',
      '13',
      '14',
      '15',
    ],
  },
  zaporozhye: {
    streets: [
      'Vilʹnoho Kozatstva str.',
      'Dniprovsʹka str.',
      'Zymova str.',
      'Pidlisna str.',
      'Poshtova str.',
    ],
    houseNumbers: [
      '1',
      '2',
      '3',
      '4',
      '5',
      '6',
      '7',
      '8',
      '9',
      '10',
      '11',
      '12',
      '13',
      '14',
      '15',
    ],
  },
  kyiv: {
    streets: [
      'Berehova str.',
      'Desyatynna str.',
      'Kvitucha str.',
      'Kyyivsʹka str.',
      'Medychna str.',
      'Mezhyhirsʹka str.',
    ],
    houseNumbers: [
      '1',
      '2',
      '3',
      '4',
      '5',
      '6',
      '7',
      '8',
      '9',
      '10',
      '11',
      '12',
      '13',
      '14',
      '15',
    ],
  },
  odesa: {
    streets: [
      'Abrykosova str.',
      'Bazarna str.',
      'Varnensʹka str.',
      'Hazova str.',
      'Naftovykiv str.',
    ],
    houseNumbers: [
      '1',
      '2',
      '3',
      '4',
      '5',
      '6',
      '7',
      '8',
      '9',
      '10',
      '11',
      '12',
      '13',
      '14',
      '15',
    ],
  },
};

export const CardNumberMask = [
  {
    mask: '0000 0000 0000 0000',
    regex: '^(5[1-5]\\d{0,2}|22[2-9]\\d{0,1}|2[3-7]\\d{0,2})\\d{0,12}',
    cardtype: 'mastercard',
    example: '5375 8282 8282 8210',
  },
  {
    mask: '0000 0000 0000 0000',
    regex: '^(?:5[0678]\\d{0,2}|6304|67\\d{0,2})\\d{0,12}',
    cardtype: 'maestro',
    example: '6759 6498 2643 8453',
  },
  {
    mask: '0000 0000 0000 0000',
    regex: '^4\\d{0,15}',
    cardtype: 'visa',
    example: '4149 6498 2643 8453',
  },
];

import React from 'react';

const CardComponent = ({ cardType }) => {
  let bgColorUp = '#bdbdbd';
  let bgColorDown = '#616161';
  let filling = '#616161';

  switch (cardType) {
    case 'mastercard':
      bgColorUp = '#03A9F4';
      bgColorDown = '#0288D1';
      filling = '#0288D1';
      break;
    case 'visa':
      bgColorUp = '#D4E157';
      bgColorDown = '#AFB42B';
      filling = '#AFB42B';
      break;
    case 'maestro':
      bgColorUp = '#FFEB3B';
      bgColorDown = '#F9A825';
      filling = '#F9A825';
      break;
  }

  return (
    <div
      style={{
        background: `linear-gradient(to bottom, ${bgColorUp}, ${bgColorDown})`,
        width: '200px', // Примерные стили, замените на свои
        height: '100px', // Примерные стили, замените на свои
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
      }}
    >
      <span style={{ color: filling }}>Your Card</span>
    </div>
  );
};

export default CardComponent;
