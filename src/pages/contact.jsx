function Contact() {
  return (
    <div className="container py-5">
      <div className="row justify-content-center">
        <div className="col-md-6">
          <div className="card shadow border-0 p-4">
            <h3 className="text-center mb-4 fw-bold">Contact Us</h3>
            <form>
              <div className="mb-3">
                <label className="form-label">Nama</label>
                <input type="text" className="form-control" placeholder="Masukkan nama" />
              </div>
              <div className="mb-3">
                <label className="form-label">Email</label>
                <input type="email" className="form-control" placeholder="Masukkan email" />
              </div>
              <div className="mb-3">
                <label className="form-label">Pesan</label>
                <textarea
                  className="form-control"
                  rows="3"
                  placeholder="Tulis pesan anda..."
                ></textarea>
              </div>
              <button type="submit" className="btn btn-primary w-100">
                Kirim Pesan
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Contact;
