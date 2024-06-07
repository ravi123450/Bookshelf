import React, { useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const SearchBar = styled.input`
  padding: 10px;
  margin: 20px 0;
  width: 300px;
  border: 1px solid #ccc;
  border-radius: 4px;
`;

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

const BookSearchPage = () => {
  const [query, setQuery] = useState('');
  const [books, setBooks] = useState([]);

  const searchBooks = async (query) => {
    const response = await axios.get(`https://openlibrary.org/search.json?q=${query}&limit=10&page=1`);
    setBooks(response.data.docs);
  };

  const handleSearch = (e) => {
    setQuery(e.target.value);
    if (e.target.value.trim()) {
      searchBooks(e.target.value);
    } else {
      setBooks([]);
    }
  };

  const addBookToBookshelf = (book) => {
    const bookshelf = JSON.parse(localStorage.getItem('bookshelf')) || [];
    bookshelf.push(book);
    localStorage.setItem('bookshelf', JSON.stringify(bookshelf));
  };

  return (
    <div>
      <Link className="my-bookshelf" to="/bookshelf">My Bookshelf</Link>
      <SearchBar 
        type="text" 
        value={query} 
        onChange={handleSearch} 
        placeholder="Search for books..." 
      />
      <div className="book-list">
        {books.map((book) => (
          <BookCard key={book.key}>
            <h3>{book.title}</h3>
            <p>Author: {book.author_name ? book.author_name.join(', ') : 'Unknown'}</p>
            <p>Edition Count: {book.edition_count}</p>
            <button onClick={() => addBookToBookshelf(book)}>Add to Bookshelf</button>
          </BookCard>
        ))}
      </div>
    </div>
  );
};

export default BookSearchPage;
