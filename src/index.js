import React from 'react';
import ReactDOM from 'react-dom';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import rootReducer from './reducers/index';
import { saveToLocalStorage, loadFromLocalStorage } from './utility/localStorage';
import './index.css';
import App from './components/App';
import * as serviceWorker from './serviceWorker';

const store = createStore(rootReducer, loadFromLocalStorage());
store.subscribe(() => saveToLocalStorage(store.getState()));

const rootTag = (
  <Provider store={store}>
    <App />
  </Provider>
);

ReactDOM.render(rootTag, document.getElementById('root'));

serviceWorker.unregister();
