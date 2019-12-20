import React from 'react';
import Header from './Header';
import BookList from '../containers/BookList';
import BookFormControl from '../containers/BookFormControl';
import './App.scss';

function App() {
  return (
    <main className="App">
      <Header />
      <BookList />
      <BookFormControl />
    </main>
  );
}

export default App;
