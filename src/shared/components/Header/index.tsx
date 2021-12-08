import { ReactNode } from 'react';
import { Tooltip, IconButton } from '@material-ui/core';
import { makeStyles } from '@material-ui/styles';

import styles from './Header.styles';

type Button = {
  icon: ReactNode,
  name: string,
  fn: () => void,
}

type Props = {
  buttons: Button[],
};

const useStyles = makeStyles(styles);

const Header: React.FC<Props> = ({ buttons }) => {
  const classes = useStyles();
  return (
    <div className={classes.header}>
      {buttons.map(({ icon, name, fn }) => (
        <Tooltip title={name} key={name}>
          <IconButton onClick={fn}>
            {icon}
          </IconButton>
        </Tooltip>
      ))}
    </div>
  );
};

export default Header;
