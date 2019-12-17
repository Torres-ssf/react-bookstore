import React from 'react';

class BookForm extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const categories = ['Action', 'Biography', 'History', 'Horror', 'Kids', 'Learning', 'Sci-Fi', 'Drama'];
    const options = categories.map((e, i) => <option key={`${e}-${i}`} value={e}>{e}</option>);

    return (
      <div>
        <h2>Add New Book</h2>
        <form className="form">
          <label>Name: </label>
          <input type="text" placeholder="book name" required/>
          <label>Author: </label>
          <input type="text" placeholder="book author" required/>
          <label>Category: </label>
          <select name="dropdown">
            {options}
          </select>
          <button type="submit">Add New Book</button>
        </form>
      </div>
    )
  }
}

export default BookForm;