import { render } from 'react-dom';
import { createBrowserHistory } from 'history';
import {
  Router,
  Route,
  Switch,
} from 'react-router-dom';

import { Provider } from 'react-redux';
import { ThemeProvider } from '@material-ui/core/styles';

import App from 'containers/App';
import Page from 'containers/Page';
import { store } from 'state/store';

import theme from './theming/theme';

const history = createBrowserHistory();

render(
  <Provider store={store}>
    <Router history={history}>
      <ThemeProvider theme={theme}>
        <App>
          <Switch>
            <Route exact path="/" component={Page} />
          </Switch>
        </App>
      </ThemeProvider>
    </Router>
  </Provider>,
  document.getElementById('root'),
);
