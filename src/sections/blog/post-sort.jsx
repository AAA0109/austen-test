import PropTypes from 'prop-types';

import MenuItem from '@mui/material/MenuItem';
import TextField from '@mui/material/TextField';

// ----------------------------------------------------------------------

PostSort.propTypes = {
  options: PropTypes.array,
  sortBy: PropTypes.string,
  onSort: PropTypes.func,
};

export default function PostSort({ options, sortBy, onSort }) {
  return (
    <TextField select size="small" value={sortBy} onChange={onSort}>
      {options.map((option) => (
        <MenuItem key={option.value} value={option.value}>
          {option.label}
        </MenuItem>
      ))}
    </TextField>
  );
}
