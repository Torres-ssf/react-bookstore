import React from 'react';

class BookForm extends React.Component { // eslint-disable-line
  constructor(props) { // eslint-disable-line
    super(props);
  }

  render() {
    const categories = ['Action', 'Biography', 'History', 'Horror', 'Kids', 'Learning', 'Sci-Fi', 'Drama'];
    const options = categories.map((e, i) => <option key={`${e}-`} value={e}>{e}</option>);

    return (
      <div>
        <h2>Add New Book</h2>
        <form className="form">
          <label htmlFor="book-name">Name: </label>
          <input id="book-name" type="text" placeholder="book name" required />
          <label htmlFor="book-author">Author: </label>
          <input id="book-author" type="text" placeholder="book author" required />
          <label htmlFor="book-category" >Category: </label>
          <select id="book-category" name="dropdown">
            {options}
          </select>
          <button type="submit">Add New Book</button>
        </form>
      </div>
    );
  }
}

export default BookForm;
