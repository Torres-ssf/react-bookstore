import React from 'react'
import PropTypes from 'prop-types';
import BookForm from '../components/BookForm';
import { connect } from 'react-redux';
import { createBookMsg } from '../actions/index';

class BookFormControl extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      title: '',
      author: '',
      category: '',
      pages: '',
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(e) {
    const { id, value } = e.target
    this.setState({
      [id]: value,
    });
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
      category: '',
      pages: '',
    });
  }

  render() {
    const { title, author, category, pages } = this.state;

    return (
      <BookForm
        title={title}
        author={author}
        category={category}
        pages={pages}
        changeHandler={this.handleChange}
        submitHandler={this.handleSubmit}
      />
    );
  };
}

BookFormControl.propTypes = {
  createNewBook: PropTypes.func.isRequired,
};

const mapDispatchToProps = dispatch => ({
  createNewBook: (book) => {
    dispatch(createBookMsg(book));
  },
});

export default connect(null, mapDispatchToProps)(BookFormControl);
