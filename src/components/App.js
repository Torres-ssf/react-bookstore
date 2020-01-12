import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Header from './Header';
import BookList from '../containers/BookList';
import './App.scss';

class App extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <Router>
        <main className="App">
          <Header setFilterDisplay={this.setShowFilterValue} />
          <Switch>
            <Route path="/" component={BookList} />
          </Switch>
        </main>
      </Router>
    );
  }
}

export default App;
