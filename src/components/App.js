import React from 'react';
import Header from './Header';
import BookList from '../containers/BookList';
import BookFormControl from '../containers/BookFormControl';
import './App.scss';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      showFilter: false,
    };
    this.setShowFilterValue = this.setShowFilterValue.bind(this);
  }

  setShowFilterValue(bool) {
    this.setState({
      showFilter: bool,
    });
  }

  render() {
    const { showFilter } = this.state;
    return (
      <main className="App">
        <Header setFilterDisplay={this.setShowFilterValue} />
        <BookList showFilter={showFilter} />
        <BookFormControl />
      </main>
    );
  }
}

export default App;
