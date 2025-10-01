// src/pages/Home.jsx
import React, { useContext, useState } from "react";
import { BooksContext } from "../contexts/BooksContext";
import BookCard from "../components/BookCard";

export default function Home() {
  const { books, addBook } = useContext(BooksContext);
  const [showForm, setShowForm] = useState(false);
  const [form, setForm] = useState({ title:"", author:"", year:"", description:"", image:"" });

  const handleChange = e => setForm(prev => ({ ...prev, [e.target.name]: e.target.value }));
  const submit = e => {
    e.preventDefault();
    if(!form.title || !form.author) return alert("Isi minimal title & author");
    addBook({
      title: form.title,
      author: form.author,
      year: Number(form.year) || new Date().getFullYear(),
      description: form.description || "-",
      image: form.image || `https://picsum.photos/seed/book${Date.now()%1000}/800/500`
    });
    setForm({ title:"", author:"", year:"", description:"", image:"" });
    setShowForm(false);
  }

  return (
    <div className="container py-5">
      <div className="d-flex justify-content-between align-items-center mb-4">
        <h2 className="text-light mb-0">Daftar Buku</h2>
        <div>
          <button className="btn btn-outline-light me-2" onClick={() => setShowForm(s=>!s)}>
            {showForm ? "Batal" : "Tambah Buku"}
          </button>
        </div>
      </div>

      {showForm && (
        <div className="card mb-4 p-3 bg-dark bg-opacity-50 border-0">
          <form onSubmit={submit}>
            <div className="row g-2">
              <div className="col-md-6"><input name="title" value={form.title} onChange={handleChange} className="form-control" placeholder="Title" /></div>
              <div className="col-md-6"><input name="author" value={form.author} onChange={handleChange} className="form-control" placeholder="Author" /></div>
              <div className="col-md-3"><input name="year" value={form.year} onChange={handleChange} className="form-control" placeholder="Year" /></div>
              <div className="col-md-9"><input name="image" value={form.image} onChange={handleChange} className="form-control" placeholder="Image URL (optional)" /></div>
              <div className="col-12"><textarea name="description" value={form.description} onChange={handleChange} className="form-control" rows="3" placeholder="Description"></textarea></div>
            </div>
            <div className="mt-3 text-end">
              <button type="submit" className="btn btn-success">Simpan</button>
            </div>
          </form>
        </div>
      )}

      <div className="row g-4">
        {books.map(b => (
          <div key={b.id} className="col-sm-6 col-md-4">
            <BookCard book={b} />
          </div>
        ))}
      </div>
    </div>
  );
}
