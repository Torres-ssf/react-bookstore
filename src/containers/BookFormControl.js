import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import BookForm from '../components/BookForm';
import { bookActions } from '../actions/index';

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
    const { id, value } = e.target;
    this.setState({
      [id]: value,
    });
  }

  handleSubmit(e) {
    e.preventDefault();
    const { addNewBook } = this.props;
    const { pages } = this.state;

    addNewBook({
      id: new Date().getTime(),
      ...this.state,
      pages: parseInt(pages, 10),
    });
    this.setState({
      title: '',
      author: '',
      category: '',
      pages: '',
    });
  }

  render() {
    const {
      title,
      author,
      category,
      pages,
    } = this.state;

    return (
      <BookForm
        title={title}
        author={author}
        category={category}
        pages={pages}
        pageTitle="Add New Book"
        submitName="Add"
        changeHandler={this.handleChange}
        submitHandler={this.handleSubmit}
      />
    );
  }
}

BookFormControl.propTypes = {
  addNewBook: PropTypes.func.isRequired,
};

const { addNewBook } = bookActions; 

const mapDispatchToProps = dispatch => ({
  addNewBook: (book) => {
    dispatch(addNewBook(book));
  },
});

export default connect(null, mapDispatchToProps)(BookFormControl);
