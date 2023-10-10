import { forwardRef } from 'react';
import PropTypes from 'prop-types';
import { useMediaQuery } from '@mui/material';
import {
  Select,
  MenuItem,
  InputLabel,
  FormControl,
} from '@material-ui/core';

const CustomSelect = forwardRef(
  ({ name, label, options, helperText, error, onChange, onBlur, value, ...rest }, ref) => {
    const isSmallScreen = useMediaQuery('(max-width:767px)');
    const fontSize = isSmallScreen ? '15px' : '20px';
    const width = isSmallScreen ? '160px' : '275px';

    return (
      <FormControl>
        <InputLabel id={`${name}-label`} style={{ fontSize: fontSize }}>{label}</InputLabel>
        <Select
          value={value}
          onChange={onChange}
          onBlur={onBlur}
          ref={ref}
          labelId={`${name}-label`}
          style={{ width: width, fontSize: fontSize }}
          error={error}
          {...rest}
        >
          {options.map(option => (
            <MenuItem key={option.value} value={option.value} style={{ fontSize: fontSize }}>
              {option.label}
            </MenuItem>
          ))}
        </Select>
        {error && <span style={{ fontSize: error ? '15px' : '25px' }}>{helperText}</span>}
      </FormControl>
    );
  }
);


CustomSelect.displayName = 'CustomSelect';

CustomSelect.propTypes = {
  name: PropTypes.string,
  control: PropTypes.any,
  options: PropTypes.array.isRequired,
  helperText: PropTypes.string,
  error: PropTypes.bool.isRequired,
  label: PropTypes.string,
  errors: PropTypes.object,
  onChange: PropTypes.func,
  onBlur: PropTypes.func,
  value: PropTypes.string,
};

export default CustomSelect;
