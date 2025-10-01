// src/contexts/BooksContext.jsx
import React, { createContext, useState } from "react";
import initialBooks from "../Utils/books";

export const BooksContext = createContext();

export function BooksProvider({ children }) {
  const [books, setBooks] = useState(initialBooks);

  const addBook = (payload) => {
    const nextId = books.length ? Math.max(...books.map(b => b.id)) + 1 : 1;
    const newBook = { id: nextId, ...payload };
    setBooks(prev => [newBook, ...prev]);
  };

  return (
    <BooksContext.Provider value={{ books, setBooks, addBook }}>
      {children}
    </BooksContext.Provider>
  );
}
