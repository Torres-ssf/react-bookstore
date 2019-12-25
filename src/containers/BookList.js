import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import CategoryFilter from '../components/CategoryFilter';
import Book from '../components/Book';
import { removeBookMsg, changeBookFilter, updateBookProgress } from '../actions/index';

class BookList extends React.Component {
  constructor(props) {
    super(props);
    this.handleRemoveBook = this.handleRemoveBook.bind(this);
    this.handleUpdateProgress = this.handleUpdateProgress.bind(this);
    this.handleFilterChange = this.handleFilterChange.bind(this);
  }

  handleRemoveBook(id) {
    const { removeBookMsg } = this.props;
    removeBookMsg(id);
  }

  handleUpdateProgress(e, index, progress) {
    e.preventDefault();
    const { updateBookProgress } = this.props;
    updateBookProgress(index, progress);
  }

  handleFilterChange(e) {
    const { changeBookFilter } = this.props;
    changeBookFilter(e.target.value);
  }

  render() {
    const { showFilter, filter } = this.props;
    let { book } = this.props;
    if (filter !== 'All') {
      book = [...book].filter(e => e.category === filter);
    }

    const books = book.map((e, i) => (
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
        {showFilter && <CategoryFilter handleFilter={this.handleFilterChange} />}
        {books}
      </div>
    );
  }
}

BookList.propTypes = {
  book: PropTypes.arrayOf(PropTypes.object).isRequired,
  filter: PropTypes.string.isRequired,
  removeBookMsg: PropTypes.func.isRequired,
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
  removeBookMsg: (id) => {
    dispatch(removeBookMsg(id));
  },
  updateBookProgress: (index, progress) => {
    dispatch(updateBookProgress(index, progress));
  },
  changeBookFilter: (category) => {
    dispatch(changeBookFilter(category));
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(BookList);
