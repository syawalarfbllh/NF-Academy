// src/components/BookCard.jsx
import { Link } from "react-router-dom";

export default function BookCard({ book }) {
  return (
    <div className="card h-100 border-0 shadow-lg bg-dark text-light rounded-3">
      <img
        src={book.image}
        alt={book.title}
        className="card-img-top"
        style={{ height: 220, objectFit: "cover", borderTopLeftRadius: "0.75rem", borderTopRightRadius: "0.75rem" }}
      />
      <div className="card-body d-flex flex-column">
        <h5 className="card-title text-light fw-bold">{book.title}</h5>
        <p className="text-info mb-2">{book.author} • {book.year}</p>
        <p className="card-text text-secondary">{book.description}</p>

        <div className="mt-auto d-flex justify-content-between align-items-center">
          <Link to={`/book/${book.id}`} className="btn btn-sm btn-outline-info">
            Detail
          </Link>
          <small className="text-muted">ID: {book.id}</small>
        </div>
      </div>
    </div>
  );
}
