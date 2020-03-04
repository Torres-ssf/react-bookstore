import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Header from './Header';
import BookList from '../containers/BookList';
import './App.scss';
import EditBook from '../containers/EditBook';

const App = () => (
  <Router>
    <main className="App">
      <Header />
      <Switch>
        <Route path="/" exact component={BookList} />
        <Route path="/edit-book" render={props => <EditBook {...props} />} />
      </Switch>
    </main>
  </Router>
);

export default App;
