import React from 'react';
import styled from 'styled-components';

const BookCard = styled.div`
  border: 1px solid #ccc;
  padding: 10px;
  margin: 10px;
  width: 200px;
  display: inline-block;
  vertical-align: top;
  border-radius: 4px;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
`;

const Book = ({ book, onAdd, onRemove, isAdded }) => {
  return (
    <BookCard>
      <h3>{book.title}</h3>
      <p><strong>Author:</strong> {book.author_name ? book.author_name.join(', ') : 'Unknown'}</p>
      <p><strong>Edition Count:</strong> {book.edition_count}</p>
      <p><strong>First Publish Year:</strong> {book.first_publish_year}</p>
      <p><strong>Publisher:</strong> {book.publisher ? book.publisher.join(', ') : 'Unknown'}</p>
      <button onClick={() => isAdded ? onRemove(book) : onAdd(book)}>
        {isAdded ? 'Remove from Bookshelf' : 'Add to Bookshelf'}
      </button>
    </BookCard>
  );
};

export default Book;
