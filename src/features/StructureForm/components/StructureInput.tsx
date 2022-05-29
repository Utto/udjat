import { ChangeEvent } from 'react';
import TextField from '@material-ui/core/TextField';
import FormControl from '@material-ui/core/FormControl';

type Props = {
  value: string,
  onChange: (arg0: string) => void,
};

const StructureInput: React.FC<Props> = ({
  value,
  onChange,
}) => {
  const handleChange = (event: ChangeEvent<HTMLInputElement>) => onChange(event.target?.value);
  return (
    <FormControl>
      <TextField
        label="Please enter your values"
        onChange={handleChange}
        value={value}
      />
    </FormControl>
  );
};

export default StructureInput;
