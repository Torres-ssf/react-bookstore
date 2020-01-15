import React from 'react';
import BookForm from '../components/BookForm';
import { connect } from 'react-redux';
import { updateBook } from '../actions/index';

class BookEdit extends React.Component {
  constructor(props) {
    super(props)
    console.log(props);
    const { id, index, title, author, pages, category, progress } = props.location.state.book
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
    updateBook(id, index, { title, author, category, pages, progress });
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
    )
  }
}

const mapDispatchToProps = dispatch => ({
  updateBook: (id, index, data) => {
    dispatch(updateBook(id, index, data));
  },
})

export default connect(null, mapDispatchToProps)(BookEdit);