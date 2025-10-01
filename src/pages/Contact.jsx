// src/pages/Contact.jsx
import React from "react";

export default function Contact(){
  return (
    <div className="container py-5">
      <div className="row justify-content-center">
        <div className="col-md-7">
          <div className="card p-4 bg-dark bg-opacity-50 border-0 shadow-sm">
            <h3 className="text-light mb-3">Contact Us</h3>
            <form>
              <div className="mb-3">
                <label className="form-label text-light">Nama</label>
                <input className="form-control" />
              </div>
              <div className="mb-3">
                <label className="form-label text-light">Email</label>
                <input type="email" className="form-control" />
              </div>
              <div className="mb-3">
                <label className="form-label text-light">Pesan</label>
                <textarea className="form-control" rows="4"></textarea>
              </div>
              <button className="btn btn-primary w-100">Kirim</button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
