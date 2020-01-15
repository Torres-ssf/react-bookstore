import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Header from './Header';
import BookList from '../containers/BookList';
import Categories from '../containers/Categories';
import './App.scss';
import EditBook from '../containers/EditBook';

const App = () => (
  <Router>
    <main className="App">
      <Header />
      <Switch>
        <Route path="/" exact component={BookList} />
        <Route path="/edit-book" render={(props) => <EditBook {...props} />} />
        <Route path="/categories" render={(props) => <Categories {...props} title={props.title} />} />
      </Switch>
    </main>
  </Router>
);

export default App;
