import { forwardRef } from 'react';
import PropTypes from 'prop-types';
import TextField from '@material-ui/core/TextField';
import FormControl from '@mui/material/FormControl';
import { useMediaQuery } from '@mui/material';
import { ThemeProvider } from '@mui/material/styles';
import baseTheme from '../../constants/themeMui';

const CustomTextField = forwardRef(
  (
    {
      value,
      error,
      helperText,
      label,
      onChange,
      labelStyle,
      endAdornment,
      ...props
    },
    ref
  ) => {
    const defaultId = `standard-search-${label}`;
    const id = error ? 'standard-error-helper-text' : defaultId;

    const { InputProps: externalInputProps, ...restProps } = props;

    const defaultColor = baseTheme.palette.primary.main;
    const errorColor = baseTheme.palette.secondary.error;
    const providedColor = labelStyle?.color;

    const determineLabelColor = () => {
      if (error) return errorColor;
      if (providedColor) return providedColor;
      return defaultColor;
    };

    const isSmallScreen = useMediaQuery('(max-width:767px)');
    const fontSize = isSmallScreen ? '1.5rem' : '2rem';
    return (
      <ThemeProvider theme={baseTheme}>
        <FormControl ref={ref}>
          <TextField
            autoComplete="off"
            sx={{ m: 1, width: '100%' }}
            id={id}
            label={
              <span
                style={{
                  fontSize: error ? '1.5rem' : '2rem',
                  ...labelStyle,
                  color: determineLabelColor(),
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
                  color: error ? 'red' : baseTheme.palette.primary.main,
                }}
              >
                {error && helperText}
              </span>
            }
            {...restProps}
            InputProps={{
              endAdornment: endAdornment || null,
              style: {
                fontSize: fontSize,
                color: baseTheme.palette.secondary.indigo,
              },
              ...externalInputProps,
            }}
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
  labelStyle: PropTypes.object,
  endAdornment: PropTypes.node,
  InputProps: PropTypes.object,
};
export default CustomTextField;
