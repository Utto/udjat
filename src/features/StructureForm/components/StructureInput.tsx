import React, { ChangeEvent } from 'react';
import TextField from '@material-ui/core/TextField';
import FormControl from '@material-ui/core/FormControl';

type Props = {
  value: string,
  onChange: (e: ChangeEvent) => void,
};

const StructureInput: React.FC<Props> = ({
  value,
  onChange,
}) => (
  <FormControl>
    <TextField
      label="Please enter your values"
      onChange={onChange}
      value={value}
    />
  </FormControl>
);

export default StructureInput;
