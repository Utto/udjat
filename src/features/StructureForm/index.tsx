import React, { useState, ChangeEvent } from 'react';
import { makeStyles } from '@material-ui/styles';
import Button from '@material-ui/core/Button';
import { SelectChangeEvent } from '@material-ui/core/Select';

import { parseInput } from 'utils/input';

import TypeSelect from './components/TypeSelect';
import StructureInput from './components/StructureInput';

type Props = {
  handleChange: (type: any, tree: any) => void,
};

type setStateFn = (value: string) => void;

const useStyles = makeStyles({
  container: {
    display: 'flex',
    justifyContent: 'center',
  },
});

const Form: React.FC<Props> = ({ handleChange }) => {
  const [type, setType] = useState('');
  const [structure, setStructure] = useState('');
  const classes = useStyles();

  const onChange = (fn: setStateFn) => (e: ChangeEvent | SelectChangeEvent) => {
    fn((e.target as HTMLInputElement).value as string);
  };

  const onClick = () => handleChange(type, parseInput(structure));

  const onChangeType = onChange(setType);
  const onChangeStructure = onChange(setStructure);

  return (
    <div className={classes.container}>
      <TypeSelect value={type} onChange={onChangeType} />
      <StructureInput value={structure} onChange={onChangeStructure} />
      <Button
        variant="contained"
        color="primary"
        onClick={onClick}
      >
        Go!
      </Button>
    </div>
  );
};

export default Form;
