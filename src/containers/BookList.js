import React from 'react';
import { connect } from 'react-redux';
import Book from '../components/Book';
import PropTypes from 'prop-types';

class BookList extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { book } = this.props;

    const books = book.map((e) => <Book id={e.id}
      title={e.title}
      author={e.author}
      category={e.category}
      key={e.id} />);

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

BookList.propTypers = {
  book: PropTypes.arrayOf(PropTypes.object),
};

const mapStateToProps = (state) => {
  const { book } = state
  return {
    book
  }
};

export default connect(mapStateToProps, null)(BookList);