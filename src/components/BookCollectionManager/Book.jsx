function Book({
  title,
  author,
  genre,
  language,
  edition,
  pages,
  rating,
  year,
  onDelete,
}) {
  return (
    <li className="book-item">
      <div className="book-info">
        <span className="book-title">{title}</span>
        <span className="book-author">by {author}</span>
        <span>Genre: {genre}</span>
        <span>Language: {language}</span>
        <span>Edition: {edition}</span>
        <span>Pages: {pages}</span>
        <span>Rating: {rating}</span>
        <span>Year: {year}</span>
      </div>

      <button onClick={onDelete} className="delete-button">
        Delete
      </button>
    </li>
  );
}

export default Book;