import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
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

const BookshelfPage = () => {
  const [bookshelf, setBookshelf] = useState([]);

  useEffect(() => {
    const savedBookshelf = JSON.parse(localStorage.getItem('bookshelf')) || [];
    setBookshelf(savedBookshelf);
  }, []);

  const removeBookFromBookshelf = (book) => {
    const updatedBookshelf = bookshelf.filter((b) => b.key !== book.key);
    setBookshelf(updatedBookshelf);
    localStorage.setItem('bookshelf', JSON.stringify(updatedBookshelf));
  };

  return (
    <div>
      <Link to="/">Go to Book Search</Link>
      <h2>Your Bookshelf</h2>
      <div className="bookshelf">
        {bookshelf.length === 0 ? (
          <p>No books in your bookshelf.</p>
        ) : (
          bookshelf.map((book) => (
            <BookCard key={book.key}>
              <h3>{book.title}</h3>
              <p>Author: {book.author_name ? book.author_name.join(', ') : 'Unknown'}</p>
              <p>Edition Count: {book.edition_count}</p>

              <button onClick={() => removeBookFromBookshelf(book)}>Remove from Bookshelf</button>
            </BookCard>
          ))
        )}
      </div>
    </div>
  );
};

export default BookshelfPage;
