import { ReactNode } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { makeStyles } from '@material-ui/styles';
import HistoryIcon from '@material-ui/icons/History';

import { RootState } from 'state/store';

import Header from 'components/Header';
import History from '../../../features/History';

import { toggle } from '../../state/ui';

import baseStyles from '../../../theming/baseStyle';

const useBaseStyles = makeStyles(baseStyles);

type Props = {
  children: ReactNode;
};

const App: React.FC<Props> = ({ children }) => {
  useBaseStyles();

  const dispatch = useDispatch();
  const UIState = useSelector((state: RootState) => state.UIState);

  const handleHistoryClick = () => dispatch(toggle('history'));

  const headerButtons = [
    { name: 'History', icon: <HistoryIcon />, fn: handleHistoryClick },
  ];
  return (
    <div className="app">
      <Header buttons={headerButtons} />
      <History handleClose={handleHistoryClick} isOpen={UIState.history} />
      {children}
    </div>
  );
};

export default App;
