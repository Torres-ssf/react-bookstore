import React from 'react';

class BookForm extends React.Component { // eslint-disable-line
  constructor(props) { // eslint-disable-line
    super(props);
  }

  render() {
    const categories = ['Action', 'Biography', 'History', 'Horror', 'Kids', 'Learning', 'Sci-Fi', 'Drama'];
    const options = categories.map(e => <option key={`${e}-`} value={e}>{e}</option>);

    return (
      <div>
        <h2>Add New Book</h2>
        <form className="form">
          <label htmlFor="book-name">
            Name:
            <input
              id="book-name"
              type="text"
              placeholder="book name"
              required
            />
          </label>
          <label htmlFor="book-author">
            Author:
            <input
              id="book-author"
              type="text"
              placeholder="book author"
              required
            />
          </label>
          <label htmlFor="book-category">
            Category:
            <select id="book-category" name="dropdown">
              {options}
            </select>
          </label>
          <button type="submit">Add New Book</button>
        </form>
      </div>
    );
  }
}

export default BookForm;
