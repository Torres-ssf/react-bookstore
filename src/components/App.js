import React from 'react';
import Header from './Header';
import BookList from '../containers/BookList';
import BookForm from '../containers/BookForm';
import './App.scss';

function App() {
  return (
    <main className="App">
      <Header />
      <BookList />
      <BookForm />
    </main>
  );
}

export default App;
