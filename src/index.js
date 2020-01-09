import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import rootReducer from './reducers/index';
import booksMiddleware from './middlewares/booksMiddleware';
import './index.css';
import App from './components/App';
import * as serviceWorker from './serviceWorker';

const store = createStore(rootReducer, applyMiddleware(booksMiddleware));

const rootTag = (
  <Provider store={store}>
    <App />
  </Provider>
);

ReactDOM.render(rootTag, document.getElementById('root'));

serviceWorker.unregister();
