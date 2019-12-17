import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import Book from '../components/Book';

class BookList extends React.Component { // eslint-disable-line
  constructor(props) { // eslint-disable-line
    super(props);
  }

  render() {
    const { book } = this.props;

    const books = book.map(e => (
      <Book
        id={e.id}
        title={e.title}
        author={e.author}
        category={e.category}
        key={e.id}
      />
    ));

    return (
      <div className="table">
        <span>ID</span>
        <span>Title</span>
        <span>Author</span>
        <span>Category</span>
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

export default connect(mapStateToProps, null)(BookList);
