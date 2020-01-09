import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import CategoryFilter from '../components/CategoryFilter';
import Book from '../components/Book';
import Loader from '../components/Loader';
import { fetchBookData, deleteBook, changeBookFilter, updateBookProgress } from '../actions/index';

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
    const { fetchBookData } = this.props;
    fetchBookData();
  }

  render() {
    const { showFilter, filter } = this.props;
    const { book } = this.props;
    let { bookList, loading } = book;
    if (showFilter && filter !== 'All') {
      bookList = [...bookList].filter(e => e.category === filter);
    }

    const books = bookList.map((e, i) => (
      <Book
        id={e.id}
        index={i}
        title={e.title}
        author={e.author}
        category={e.category}
        pages={e.pages}
        progress={e.progress}
        updateProgress={this.handleUpdateProgress}
        key={e.id}
        deleteHandler={this.handleRemoveBook}
      />
    ));

    return (
      <div className="book-list">
        {
          showFilter
          && (
            <CategoryFilter
              filter={filter}
              handleFilter={this.handleFilterChange}
            />
          )
        }
        {loading && <Loader />}
        {books}
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
  showFilter: PropTypes.bool.isRequired,
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
