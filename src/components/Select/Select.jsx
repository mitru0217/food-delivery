import { Controller } from 'react-hook-form';
import PropTypes from 'prop-types';
import { SelectStyled } from './Select.styled';

const Select = ({ name, control, options, label, ...rest }) => {
  return (
    <div>
      <label>{label}</label>
      <Controller
        name={name}
        control={control}
        render={({ field }) => (
          <SelectStyled {...field} {...rest}>
            {options.map(option => (
              <option key={option.value} value={option.value}>
                {option.label}
              </option>
            ))}
          </SelectStyled>
        )}
      />
    </div>
  );
};

Select.propTypes = {
  name: PropTypes.string.isRequired,
  control: PropTypes.any.isRequired,
  options: PropTypes.array.isRequired,
  label: PropTypes.string,
  errors: PropTypes.object,
};

export default Select;
