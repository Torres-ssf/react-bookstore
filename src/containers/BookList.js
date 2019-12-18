import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import CategoryFilter from '../components/CategoryFilter';
import Book from '../components/Book';
import { removeBookMsg, changeBookFilter } from '../actions/index';

class BookList extends React.Component {
  constructor(props) {
    super(props);
    this.handleRemoveBook = this.handleRemoveBook.bind(this);
    this.handleFilterChange = this.handleFilterChange.bind(this);
  }

  handleRemoveBook(id) {
    const { removeBookMsg } = this.props;
    removeBookMsg(id);
  }

  handleFilterChange(e) {
    const { changeBookFilter } = this.props;
    changeBookFilter(e.target.value);
  }

  render() {
    const { filter } = this.props;
    const book = filter !== 'All'
      ? this.props.book.filter(e => e.category === filter)
      : this.props.book;

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
      <div>
        <CategoryFilter
          handleFilter={this.handleFilterChange}
        />
        <div className="table">
          <span>ID</span>
          <span>Title</span>
          <span>Author</span>
          <span>Category</span>
          <span />
          {books}
        </div>
      </div>
    );
  }
}

BookList.propTypes = {
  book: PropTypes.arrayOf(PropTypes.object).isRequired,
  filter: PropTypes.string.isRequired,
  removeBookMsg: PropTypes.func.isRequired,
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
  removeBookMsg: (id) => {
    dispatch(removeBookMsg(id));
  },
  changeBookFilter: (category) => {
    dispatch(changeBookFilter(category));
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(BookList);
