import React from 'react';
import ReactDOM from 'react-dom';
import { createStore } from 'redux';
import rootReducer from './reducers/index';
import dummyData from './dummyData';
import './index.css';
import App from './components/App';
import * as serviceWorker from './serviceWorker';
import { Provider } from 'react-redux';

const store = createStore(rootReducer, dummyData());

const rootTag = (
  <Provider store={store}>
    <App />
  </Provider>
);

ReactDOM.render(rootTag, document.getElementById('root'));

serviceWorker.unregister();
