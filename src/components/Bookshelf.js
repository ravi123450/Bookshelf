import React from 'react';
import Book from './Book';

const Bookshelf = ({ books, onRemove }) => {
  return (
    <div className="bookshelf">
      <h2>Your Bookshelf</h2>
      {books.length === 0 ? (
        <p>No books in your bookshelf.</p>
      ) : (
        books.map((book) => (
          <Book 
            key={book.key} x
            book={book} 
            onRemove={onRemove} 
            isAdded={true}
          />
        ))
      )}
    </div>
  );
};

export default Bookshelf;
