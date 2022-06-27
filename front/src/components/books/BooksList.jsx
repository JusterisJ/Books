import React, { useEffect, useState } from "react";
import { getAllBooks } from "../../api/library/BooksAPI";
import Book from "./Book";

export default function BooksList() {
  const [books, setBooks] = useState([]);
  useEffect(() => {
    getAllBooks().then((res) => {
      console.log(res);
      setBooks(res.data.data);
    });
  }, []);

  if (books.length > 0) {
    var displayBooks = books.map((book) => {
      return <Book id={book._id} title={book.title} category={book.category} cover={book.cover} author={book.author} releaseDate={book.releaseDate} />;
    });
  }
  return (
    <div className="container">
      <div className="row">{displayBooks}</div>
    </div>
  );
}
