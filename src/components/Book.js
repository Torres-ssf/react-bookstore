import React from 'react';
import PropTypes from 'prop-types';

const Book = (props) => {
  const arr = [
    <span key={`${props.id}-id`}>{props.id}</span>,
    <span key={`${props.id}-title`}>{props.title}</span>,
    <span key={`${props.id}-author`}>{props.author}</span>,
    <span key={`${props.id}-category`}>{props.category}</span>,
  ];

  return arr;
};

Book.propTypes = {
  id: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
  author: PropTypes.string.isRequired,
  category: PropTypes.string.isRequired,
};

export default Book;
