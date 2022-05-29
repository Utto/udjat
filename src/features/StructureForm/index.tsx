import { useState, useEffect } from 'react';
import { makeStyles } from '@material-ui/styles';
import Button from '@material-ui/core/Button';

import { parseInput } from 'utils/input';
import { StructureType, Structure } from 'types/structure';

import TypeSelect from './components/TypeSelect';
import StructureInput from './components/StructureInput';

type Props = {
  savedType: StructureType,
  savedValue: string,
  handleChange: (payload: Structure) => void,
};

const useStyles = makeStyles({
  container: {
    display: 'flex',
    justifyContent: 'center',
  },
});

const Form: React.FC<Props> = ({ savedType, savedValue, handleChange }) => {
  const [type, setType] = useState<StructureType>('');
  const [value, setValue] = useState('');
  const classes = useStyles();

  useEffect(() => setType(savedType), [savedType]);
  useEffect(() => setValue(savedValue), [savedValue]);

  const onClick = () => handleChange({ type, value: parseInput(value) });

  return (
    <div className={classes.container}>
      <TypeSelect value={type} onChange={setType} />
      <StructureInput value={value} onChange={setValue} />
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
