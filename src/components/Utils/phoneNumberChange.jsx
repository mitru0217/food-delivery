


// const handlePhoneNumberChange = event => {
//     const rawValue = event.target.value;
//     const withoutPrefix = rawValue.replace('+380 ', '');
//     const numericPart = withoutPrefix.replace(/[^0-9]/g, '');
//     const formattedValue = '+380 ' + numericPart.substring(0, 9);
//     setValue('phoneNumber', formattedValue); // Manually set the value using react-hook-form
//     event.target.value = formattedValue;
// };