import { forwardRef } from 'react';
import PropTypes from 'prop-types';
import { useMediaQuery } from '@mui/material';
import { ThemeProvider } from '@mui/material/styles';
import baseTheme from '../../constants/themeMui';
import {
  Select,
  MenuItem,
  InputLabel,
  FormControl,
} from '@material-ui/core';

const CustomSelect = forwardRef(
  ({ name, label, options, helperText, error, onChange, onBlur, value, ...rest }, ref) => {
    const isSmallScreen = useMediaQuery('(max-width:767px)');
    const fontSize = isSmallScreen ? '1.25rem' : '2rem';
    const width = isSmallScreen ? '160px' : '228px';

    return (
      <ThemeProvider theme={baseTheme}>
    <FormControl>
        <InputLabel id={`${name}-label`} style={{ fontSize: fontSize }}>{label}</InputLabel>
        <Select
        
          value={value}
          onChange={onChange}
          onBlur={onBlur}
          ref={ref}
          labelId={`${name}-label`}
          style={{ width: width, fontSize: fontSize, color: baseTheme.palette.secondary.indigo }}
          error={error}
          {...rest}
        >
          {options.map(option => (
            <MenuItem key={option.value} value={option.value} style={{ fontSize: fontSize, color: baseTheme.palette.primary.main }}>
              {option.label}
            </MenuItem>
          ))}
        </Select>
        {error && <span style={{ fontSize: error ? '15px' : '25px' }}>{helperText}</span>}
      </FormControl>
      </ThemeProvider>
  
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
