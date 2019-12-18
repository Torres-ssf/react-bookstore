import React from 'react';
import BookList from '../containers/BookList';
import BookForm from '../containers/BookForm';
import './App.css';

function App() {
  return (
    <main className="App">
      <h1>Bookstore</h1>
      <BookList />
      <BookForm />
    </main>
  );
}

export default App;
