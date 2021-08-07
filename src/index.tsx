import { render } from 'react-dom';
import { createBrowserHistory } from 'history';
import {
  Router,
  Route,
  Switch,
} from 'react-router-dom';

import App from 'containers/App';
import Page from 'containers/Page';

const history = createBrowserHistory();

render(
  <Router history={history}>
    <App>
      <Switch>
        <Route exact path="/" component={Page} />
      </Switch>
    </App>
  </Router>,
  document.getElementById('root'),
);
