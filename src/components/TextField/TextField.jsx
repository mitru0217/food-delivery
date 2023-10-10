import { forwardRef } from 'react';
import PropTypes from 'prop-types';
import TextField from '@material-ui/core/TextField';
import FormControl from '@mui/material/FormControl';
import { useMediaQuery } from '@mui/material';

const CustomTextField = forwardRef(
  ({ value, error, helperText, label, onChange, ...props }, ref) => {
    const id = error ? 'standard-error-helper-text' : 'standard-search';

    const isSmallScreen = useMediaQuery('(max-width:767px)');
    const fontSize = isSmallScreen ? '15px' : '25px';
    return (
      <FormControl ref={ref}>
        <TextField
          id={id}
          label={
            <span
              style={{
                fontSize: error ? '10px' : '15px',
              }}
            >
              {label || (error ? 'Error' : 'Search Field')}
            </span>
          }
          type="search"
          variant="standard"
          error={error}
          helperText={
            <span
              style={{
                fontSize: error ? '15px' : '25px',
              }}
            >
              {error && helperText}
            </span>
          }
          InputProps={{
            style: {
              fontSize: fontSize,
            },
          }}
          {...props}
          value={value}
          onChange={onChange}
        />
      </FormControl>
    );
  }
);

CustomTextField.displayName = 'CustomTextField';
CustomTextField.propTypes = {
  name: PropTypes.string,
  error: PropTypes.bool.isRequired,
  helperText: PropTypes.string,
  label: PropTypes.string,
  value: PropTypes.string,
  onChange: PropTypes.func,
};
export default CustomTextField;
