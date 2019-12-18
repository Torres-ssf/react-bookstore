import React from 'react';
import ReactDOM from 'react-dom';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import rootReducer from './reducers/index';
import './index.css';
import App from './components/App';
import * as serviceWorker from './serviceWorker';

const store = createStore(rootReducer);

const rootTag = (
  <Provider store={store}>
    <App />
  </Provider>
);

ReactDOM.render(rootTag, document.getElementById('root'));

serviceWorker.unregister();
