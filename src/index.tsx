import { render } from 'react-dom';
import { createBrowserHistory } from 'history';
import {
  Router,
  Route,
  Switch,
} from 'react-router-dom';
import { ThemeProvider } from 'react-jss';

import App from 'containers/App';
import Page from 'containers/Page';

import theme from './jss/theme';

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
