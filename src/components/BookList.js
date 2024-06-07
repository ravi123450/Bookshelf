import React from 'react';
import Book from './Book';

const BookList = ({ books, onAdd, onRemove, bookshelf }) => {
  return (
    <div className="book-list">
      {books.map((book) => (
        <Book 
          key={book.key} 
          book={book} 
          onAdd={onAdd} 
          onRemove={onRemove} 
          isAdded={bookshelf.some(b => b.key === book.key)}
        />
      ))}
    </div>
  );
};

export default BookList;
