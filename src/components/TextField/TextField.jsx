import { forwardRef } from 'react';
import PropTypes from 'prop-types';
import TextField from '@material-ui/core/TextField';
import FormControl from '@mui/material/FormControl';
import { useMediaQuery } from '@mui/material';
import { ThemeProvider } from '@mui/material/styles';
import baseTheme from '../../constants/themeMui';


const CustomTextField = forwardRef(
  ({ value, error, helperText, label, onChange, ...props }, ref) => {
    const id = error ? 'standard-error-helper-text' : 'standard-search';

    const isSmallScreen = useMediaQuery('(max-width:767px)');
    const fontSize = isSmallScreen ? '1.5rem' : '2rem';
    return (
      <ThemeProvider theme={baseTheme}>
     <FormControl ref={ref}>
        <TextField
         autoComplete="off" 
          id={id}
          label={
            <span
              style={{
                fontSize: error ? '1.5rem' : '2rem',
                сolor: error ? 'red' : 'baseTheme.palette.primary.main',
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
                color: baseTheme.palette.secondary.indigo,
              }}
            >
              {error && helperText}
            </span>
          }
          InputProps={{
            style: {
              fontSize: fontSize,
              color: baseTheme.palette.secondary.indigo,
            },
          }}
          {...props}
          value={value}
          onChange={onChange}
        />
      </FormControl>

      </ThemeProvider>
 
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
