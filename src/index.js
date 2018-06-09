import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import configStore from '@redux/store';
import './index.css';
import registerServiceWorker from './registerServiceWorker';

const store = configStore();

const App = () => (
  <Provider store={store}>
    <div>
      <p>Test</p>
    </div>
  </Provider>
);

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
