import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select, { SelectChangeEvent } from '@material-ui/core/Select';
import { StructureType } from 'types/structure';

type Props = {
  value: StructureType,
  onChange: (arg0: StructureType) => void,
};

const structures = [
  { id: 'bst', name: 'Binary search tree' },
];

const StructureTypeSelect: React.FC<Props> = ({
  value,
  onChange,
}) => {
  const handleChange = (event: SelectChangeEvent) => onChange(event.target.value as StructureType);
  return (
    <FormControl>
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
  );
};

export default StructureTypeSelect;
