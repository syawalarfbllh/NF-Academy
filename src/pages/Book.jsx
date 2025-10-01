// src/pages/Book.jsx
import React, { useContext } from "react";
import { useParams, Link } from "react-router-dom";
import { BooksContext } from "../contexts/BooksContext";

export default function Book() {
  const { id } = useParams();
  const { books } = useContext(BooksContext);
  const book = books.find(b => String(b.id) === String(id));

  if(!book) return (
    <div className="container py-5">
      <h3 className="text-light">Buku tidak ditemukan</h3>
      <Link to="/" className="btn btn-outline-light">Kembali</Link>
    </div>
  );

  return (
    <div className="container py-5">
      <div className="row g-4">
        <div className="col-md-5">
          <img src={book.image} className="img-fluid rounded shadow" alt={book.title} />
        </div>
        <div className="col-md-7">
          <h1 className="fw-bold text-light">{book.title}</h1>
          <p className="text-light">{book.author} • {book.year}</p>
          <p className="text-success">{book.description}</p>
          <Link to="/" className="btn btn-outline-light">Kembali</Link>
        </div>
      </div>
    </div>
  );
}
