function Home() {
  return (
    <div className="container-fluid bg-light text-dark py-5">
      <div className="row align-items-center">
        <div className="col-md-6 text-center text-md-start px-5">
          <h1 className="display-4 fw-bold">Selamat Datang Gess👋</h1>
          <p className="lead">
            Website ini dibangun menggunakan <b>React</b> & <b>Bootstrap</b>.
            & Website ini dibangun oleh <b>Muhammad Syawal Arif Billah</b>.
          </p>
          <a href="/team" className="btn btn-primary btn-lg mt-3">
            Kenali Tim Kami
          </a>
        </div>
        <div className="col-md-6 text-center">
          <img
            src="/images/parentria.png"
            alt="Hero"
            className="img-fluid rounded shadow"
          />
        </div>
      </div>
    </div>
  );
}
export default Home;
