import React from 'react';
import Book from './Book';

const SearchResult = props => {
  const { books, searchBooks, onMove } = props;
  const updatedBooks = searchBooks.map(book => {
    books.map(b => {
      if(b.id === book.id) {
        book.shelf = b.shelf;
      }
      return b;
    });
    return book;
  });
  return (
    <div className="search-books-results">
      <ol className="books-grid">
        {updatedBooks.map(book => (
          <Book 
            key={book.id} 
            book={book} 
            shelf={book.shelf ? book.shelf : 'none'}
            onMove={onMove}
          />
        ))}
      </ol>
    </div>
  );
};

export default SearchResult;