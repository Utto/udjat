import { render } from 'react-dom';
import { createBrowserHistory } from 'history';
import {
  Router,
  Route,
  Switch,
} from 'react-router-dom';

import App from 'containers/App';
import Page from 'containers/Page';

import { ThemeProvider } from '@material-ui/core/styles';

import theme from './theming/theme';

const history = createBrowserHistory();

render(
  <Router history={history}>
    <ThemeProvider theme={theme}>
      <App>
        <Switch>
          <Route exact path="/" component={Page} />
        </Switch>
      </App>
    </ThemeProvider>
  </Router>,
  document.getElementById('root'),
);
