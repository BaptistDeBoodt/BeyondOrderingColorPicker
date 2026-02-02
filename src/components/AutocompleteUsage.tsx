import Autocomplete from '@mui/material/Autocomplete';
import TextField from '@mui/material/TextField';
import type { AutocompleteUsageProps } from '@types/AutocompleteUsageProps';

const AutocompleteUsage = ({ 
  options,
  label,
  value,
  onChange,
  gradients, 
}: AutocompleteUsageProps) => {
  return (
    <Autocomplete
      disablePortal
      options={options}
      value={value}
      onChange={(event, newValue) => onChange(newValue)}
      sx={{ width: 300 }}
      renderInput={(params) => (
        <TextField
          {...params}
          label={label}
          variant="standard"
          sx={{
            '& .MuiInputLabel-root': {
              color: gradients['gradient-800'],
            },
            '& .MuiInputLabel-root.Mui-focused': {
              color: gradients['gradient-600'],
            },
            '& .MuiInputBase-input': {
              color: gradients['gradient-800'],
            },
            '& .MuiInput-underline:before': { 
              borderBottomColor: gradients['gradient-400'],
              borderBottomWidth: '2px',
            },
            '& .MuiInput-underline:hover:before': {
              borderBottomColor: gradients['gradient-600'], 
            }, 
            '& .MuiInput-underline:after': {
              borderBottomColor: gradients['gradient-200']
            },
          }}
        />
      )}
    />
  );
}

export default AutocompleteUsage;