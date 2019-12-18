import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { createBookMsg } from '../actions/index';
import { bookCategories } from '../utility/bookCategories';

class BookForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      title: '',
      author: '',
      category: 'Action',
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(e) {
    switch (e.target.id) {
      case 'title':
        this.setState({
          title: e.target.value,
        });
        break;

      case 'author':
        this.setState({
          author: e.target.value,
        });
        break;

      default:
        this.setState({
          category: e.target.value,
        });
    }
  }

  handleSubmit(e) {
    e.preventDefault();
    const id = Math.random().toString(36).substr(2, 7);
    const { createNewBook } = this.props;

    createNewBook({
      id,
      ...this.state,
    });
    this.setState({
      title: '',
      author: '',
      category: 'Action',
    });
  }

  render() {
    const { title, author, category } = this.state;
    const options = bookCategories.map(e => <option key={`${e}-`} value={e}>{e}</option>);

    return (
      <div>
        <h2>Add New Book</h2>
        <form className="form" onSubmit={this.handleSubmit}>
          <label
            className="form-label"
            htmlFor="title"
          >
            Name:
            <input
              id="title"
              className="book-input"
              type="text"
              placeholder="book name"
              onChange={this.handleChange}
              value={title}
              required
            />
          </label>
          <label
            className="form-label"
            htmlFor="author"
          >
            Author:
            <input
              id="author"
              className="book-input"
              type="text"
              placeholder="book author"
              onChange={this.handleChange}
              value={author}
              required
            />
          </label>
          <label htmlFor="category">
            Category:
            <select
              className="category-select"
              id="category"
              onChange={this.handleChange}
              value={category}
            >
              {options}
            </select>
          </label>
          <button className="submit-button" type="submit">Add New Book</button>
        </form>
      </div>
    );
  }
}

BookForm.propTypes = {
  createNewBook: PropTypes.func.isRequired,
};

const mapDispatchToProps = dispatch => ({
  createNewBook: (book) => {
    dispatch(createBookMsg(book));
  },
});

export default connect(null, mapDispatchToProps)(BookForm);
