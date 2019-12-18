import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import Book from '../components/Book';
import { removeBookMsg } from '../actions/index';

class BookList extends React.Component { // eslint-disable-line
  constructor(props) { // eslint-disable-line
    super(props);
    this.handleRemoveBook = this.handleRemoveBook.bind(this);
  }

  handleRemoveBook(id) {
    const { removeBookMsg } = this.props;
    removeBookMsg(id);
  }

  render() {
    const { book } = this.props;

    const books = book.map(e => (
      [
        <Book
          id={e.id}
          title={e.title}
          author={e.author}
          category={e.category}
          key={e.id}
        />,
        <button
          className="delete-button"
          type="button"
          key={`${e.id}-btn`}
          onClick={() => this.handleRemoveBook(e.id)}
        >
          delete
        </button>,
      ]
    ));

    return (
      <div className="table">
        <span>ID</span>
        <span>Title</span>
        <span>Author</span>
        <span>Category</span>
        <span />
        {books}
      </div>
    );
  }
}

BookList.defaultProps = {
  book: null,
};

BookList.propTypes = {
  book: PropTypes.arrayOf(PropTypes.object),
};

const mapStateToProps = (state) => {
  const { book } = state;
  return {
    book,
  };
};

const mapDispatchToProps = dispatch => ({
  removeBookMsg: (id) => {
    dispatch(removeBookMsg(id));
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(BookList);
