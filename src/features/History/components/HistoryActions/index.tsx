import { useState } from 'react';
import { Tooltip, IconButton } from '@material-ui/core';
import {
  ExpandMore,
  ExpandLess,
  DeleteForever,
  Restore,
} from '@material-ui/icons';

import { SvgIconTypeMap } from '@material-ui/core/SvgIcon';

type Color = SvgIconTypeMap['props']['color'];

const actions = [
  { title: 'Restore', Icon: Restore },
  { title: 'Delete', Icon: DeleteForever, color: 'error' },
];

const HistoryActions: React.FC<{}> = () => {
  const [isOpen, setIsOpen] = useState(false);
  const handleClick = () => setIsOpen(!isOpen);
  const PrimaryIcon = isOpen ? ExpandLess : ExpandMore;
  return (
    <>
      <Tooltip title="Actions" placement="left">
        <IconButton aria-label="delete" size="small" onClick={handleClick}>
          <PrimaryIcon fontSize="inherit" />
        </IconButton>
      </Tooltip>
      {isOpen && (
        <>
          {actions.map(({ title, Icon, color = 'default' }) => (
            <Tooltip title={title} key={title} placement="left">
              <IconButton aria-label={title} size="small">
                <Icon fontSize="inherit" color={color as Color} />
              </IconButton>
            </Tooltip>
          ))}
        </>
      )}
    </>
  );
};

export default HistoryActions;
