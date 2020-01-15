import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import BookForm from '../components/BookForm';
import { updateBook } from '../actions/index';

class BookEdit extends React.Component {
  constructor(props) {
    super(props);
    console.log(props);
    const {
      id, index, title, author, pages, category, progress,
    } = props.location.state.book;

    this.state = {
      id,
      index,
      title,
      author,
      pages,
      category,
      progress,
    };

    this.changeInputHandler = this.changeInputHandler.bind(this);
    this.submitHandler = this.submitHandler.bind(this);
  }

  changeInputHandler(e) {
    const { id, value } = e.target;
    this.setState({
      [id]: value,
    });
  }

  submitHandler(e) {
    e.preventDefault();
    const { goBack } = this.props.history;
    const { updateBook } = this.props;
    const { id, index, title, author, pages, category } = this.state;
    let { progress } = this.state;
    if (progress > pages) {
      progress = pages;
    }
    updateBook(id, index, {
      title, author, category, pages, progress
    });
    goBack();
  }

  render() {
    const { title, author, pages, category } = this.state;
    return (
      <BookForm
        title={title}
        author={author}
        pages={pages}
        category={category}
        pageTitle="Edit Book"
        submitName="Confirm Edit"
        changeHandler={this.changeInputHandler}
        submitHandler={this.submitHandler}
      />
    );
  }
}

BookEdit.propTypes = {
  location: PropTypes.exact({
    pathname: PropTypes.string.isRequired,
    search: PropTypes.string.isRequired,
    hash: PropTypes.string.isRequired,
    state: PropTypes.exact({
      book: PropTypes.exact({
        index: PropTypes.number.isRequired,
        id: PropTypes.number.isRequired,
        title: PropTypes.string.isRequired,
        author: PropTypes.string.isRequired,
        category: PropTypes.string.isRequired,
        pages: PropTypes.number.isRequired,
        progress: PropTypes.number.isRequired,
      }).isRequired,
    }).isRequired,
    key: PropTypes.string.isRequired,
  }).isRequired,
  updateBook: PropTypes.func.isRequired,
};

const mapDispatchToProps = dispatch => ({
  updateBook: (id, index, data) => {
    dispatch(updateBook(id, index, data));
  },
});

export default connect(null, mapDispatchToProps)(BookEdit);
