import 'antd/dist/antd.css';

import { render } from 'react-dom';
import { HelmetProvider } from 'react-helmet-async';
import { Provider } from 'react-redux';
import { BrowserRouter as Router } from 'react-router-dom';

import store from 'store';

import App from './App';

render(
  <Provider store={store}>
    <HelmetProvider>
      <Router>
        <App />
      </Router>
    </HelmetProvider>
  </Provider>,
  document.getElementById('root')
);
