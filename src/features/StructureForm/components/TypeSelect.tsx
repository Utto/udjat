import React from 'react';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select, { SelectChangeEvent } from '@material-ui/core/Select';

type Props = {
  value: string,
  onChange: (arg0: SelectChangeEvent) => void,
};

const structures = [
  { id: 'bst', name: 'Binary search tree' },
];

const StructureTypeSelect: React.FC<Props> = ({
  value,
  onChange,
}) => {
  const handleChange = (event: SelectChangeEvent) => {
    console.log('e', event.target.value);
    onChange(event);
  };
  return (
    <div className="input">
      <FormControl fullWidth>
        <InputLabel>Select the data structure: </InputLabel>
        <Select
          value={value}
          label="Select the data structure:"
          onChange={handleChange}
        >
          {structures.map(({ id, name }) => (
            <MenuItem key={id} value={id}>{name}</MenuItem>
          ))}
        </Select>
      </FormControl>
    </div>
  );
};

export default StructureTypeSelect;
