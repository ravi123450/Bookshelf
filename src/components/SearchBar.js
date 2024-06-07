import React from 'react';
import styled from 'styled-components';

const SearchInput = styled.input`
  padding: 10px;
  margin: 20px 0;
  width: 300px;
  border: 1px solid #ccc;
  border-radius: 4px;
`;

const SearchBar = ({ query, onSearch }) => {
  return (
    <SearchInput 
      type="text" 
      value={query} 
      onChange={onSearch} 
      placeholder="Search for books..." 
    />
  );
};

export default SearchBar;
