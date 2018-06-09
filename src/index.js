import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import configStore from '@redux/store';
import Router from '@router';
import './index.css';
import registerServiceWorker from './registerServiceWorker';

const store = configStore();

const App = () => (
  <Provider store={store}>
    <Router />
  </Provider>
);

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
