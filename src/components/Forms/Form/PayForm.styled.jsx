import PropTypes from 'prop-types';
import TextField from '@material-ui/core/TextField';
import FormControl from '@mui/material/FormControl';
import { width } from 'styled-system';

// const StyledFormControl = styled(FormControl)`
//   width: 300px;

//   @media screen and (max-width: 600px) {
//     width: 100%; /* На экранах меньше 600px, ширина будет 100% */
//   }
// `;

const CustomTextField = ({ name, error, helperText, label, ...props }) => {
  const id = error ? 'standard-error-helper-text' : 'standard-search';

  return (
    <FormControl sx={width: 100}>
      <TextField
        fullWidth
        id={id}
        label={
          <span
            style={{
              fontSize: error ? '15px' : '20px',
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
            fontSize: '25px',
          },
        }}
        {...props}
        name={name}
      />
    </FormControl>
  );
};

CustomTextField.propTypes = {
  name: PropTypes.string.isRequired,
  error: PropTypes.bool.isRequired,
  helperText: PropTypes.string,
  label: PropTypes.string,
};
export default CustomTextField;
