import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import CategoryFilter from '../components/CategoryFilter';
import Book from '../components/Book';
import Loader from '../components/Loader';
import {
  fetchBookData, deleteBook, changeBookFilter, updateBookProgress,
} from '../actions/index';
import BookFormControl from './BookFormControl';

class BookList extends React.Component {
  constructor(props) {
    super(props);
    this.handleRemoveBook = this.handleRemoveBook.bind(this);
    this.handleUpdateProgress = this.handleUpdateProgress.bind(this);
    this.handleFilterChange = this.handleFilterChange.bind(this);
  }

  handleRemoveBook(id) {
    const { deleteBook } = this.props;
    deleteBook(id);
  }

  handleUpdateProgress(e, id, index, progress) {
    e.preventDefault();
    const { updateBookProgress } = this.props;
    updateBookProgress(id, index, progress);
  }

  handleFilterChange(e) {
    const { changeBookFilter } = this.props;
    changeBookFilter(e.target.value);
  }

  componentDidMount() {
    const { book, fetchBookData } = this.props;
    const { bookList } = book;
    if (bookList.length === 0) {
      fetchBookData();
    }
  }

  render() {
    const { filter } = this.props;
    const { book } = this.props;
    const { bookList, loading } = book;

    const books = bookList.reduce((result, e, i) => {
      if (filter === 'All' || e.category === filter) {
        result.push(<Book
          book={{ index: i, ...e }}
          updateProgress={this.handleUpdateProgress}
          key={e.id}
          deleteHandler={this.handleRemoveBook}
        />);
      }
      return result;
    }, []);

    return (
      <div className="book-list">
        <CategoryFilter
          filter={filter}
          handleFilter={this.handleFilterChange}
        />
        {loading && <Loader />}
        {books}
        <BookFormControl />
      </div>
    );
  }
}

BookList.propTypes = {
  book: PropTypes.exact({
    loading: PropTypes.bool,
    bookList: PropTypes.array,
  }).isRequired,
  filter: PropTypes.string.isRequired,
  fetchBookData: PropTypes.func.isRequired,
  deleteBook: PropTypes.func.isRequired,
  updateBookProgress: PropTypes.func.isRequired,
  changeBookFilter: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => {
  const { book, filter } = state;
  return {
    book,
    filter,
  };
};

const mapDispatchToProps = dispatch => ({
  fetchBookData: () => {
    dispatch(fetchBookData());
  },
  deleteBook: (id) => {
    dispatch(deleteBook(id));
  },
  updateBookProgress: (id, index, progress) => {
    dispatch(updateBookProgress(id, index, progress));
  },
  changeBookFilter: (category) => {
    dispatch(changeBookFilter(category));
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(BookList);
