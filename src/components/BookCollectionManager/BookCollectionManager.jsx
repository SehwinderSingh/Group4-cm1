import React, { useState } from "react";
import "./BookCollectionManager.css";

function BookCollectionManager() {
  const [books, setBooks] = useState([]);

  const [title, setTitle] = useState("");
  const [author, setAuthor] = useState("");
  const [genre, setGenre] = useState("");
  const [language, setLanguage] = useState("");
  const [edition, setEdition] = useState("");
  const [pages, setPages] = useState("");
  const [rating, setRating] = useState("");
  const [year, setYear] = useState("");

  // Add a new book to the list
  function addBook(event) {
    event.preventDefault();

    if (
      title.trim() !== "" &&
      author.trim() !== "" &&
      genre.trim() !== "" &&
      language.trim() !== "" &&
      edition.trim() !== "" &&
      pages.trim() !== "" &&
      rating.trim() !== "" &&
      year.trim() !== ""
    ) {
      setBooks((b) => [
        ...b,
        {
          title,
          author,
          genre,
          language,
          edition,
          pages,
          rating,
          year,
        },
      ]);

      setTitle("");
      setAuthor("");
      setGenre("");
      setLanguage("");
      setEdition("");
      setPages("");
      setRating("");
      setYear("");
    }
  }

  // Delete a book from the list
  function deleteBook(index) {
    const updatedBooks = books.filter((_, i) => i !== index);
    setBooks(updatedBooks);
  }

  return (
    <div className="app-container">
      <h1>Book Collection Manager</h1>

      <form className="input-section" onSubmit={addBook}>
        <input
          type="text"
          placeholder="Enter book title..."
          value={title}
          onChange={(event) => setTitle(event.target.value)}
          className="input-field"
        />

        <input
          type="text"
          placeholder="Enter author name..."
          value={author}
          onChange={(event) => setAuthor(event.target.value)}
          className="input-field"
        />

        <input
          type="text"
          placeholder="Enter genre..."
          value={genre}
          onChange={(event) => setGenre(event.target.value)}
          className="input-field"
        />

        <input
          type="text"
          placeholder="Enter language..."
          value={language}
          onChange={(event) => setLanguage(event.target.value)}
          className="input-field"
        />

        <input
          type="text"
          placeholder="Enter edition..."
          value={edition}
          onChange={(event) => setEdition(event.target.value)}
          className="input-field"
        />

        <input
          type="number"
          placeholder="Enter number of pages..."
          value={pages}
          onChange={(event) => setPages(event.target.value)}
          className="input-field"
        />

        <input
          type="number"
          placeholder="Enter rating..."
          value={rating}
          onChange={(event) => setRating(event.target.value)}
          className="input-field"
        />

        <input
          type="number"
          placeholder="Enter publication year..."
          value={year}
          onChange={(event) => setYear(event.target.value)}
          className="input-field"
        />

        <button type="submit" className="add-button">
          Add Book
        </button>
      </form>

      <div className="books-section">
        <h2>Your Books ({books.length})</h2>

        {books.length === 0 ? (
          <p className="empty-message">
            No books yet. Add one to get started!
          </p>
        ) : (
          <ol className="books-list">
            {books.map((book, index) => (
              <li key={index} className="book-item">
                <div className="book-info">
                  <span className="book-title">{book.title}</span>
                  <span className="book-author">
                    by {book.author}
                  </span>
                  <span>Genre: {book.genre}</span>
                  <span>Language: {book.language}</span>
                  <span>Edition: {book.edition}</span>
                  <span>Pages: {book.pages}</span>
                  <span>Rating: {book.rating}</span>
                  <span>Year: {book.year}</span>
                </div>

                <button
                  onClick={() => deleteBook(index)}
                  className="delete-button"
                >
                  Delete
                </button>
              </li>
            ))}
          </ol>
        )}
      </div>
    </div>
  );
}

export default BookCollectionManager;