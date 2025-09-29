function Team() {
  const team = [
    { name: "Ghiya", role: "Frontend Developer", img: "/images/1111.png" },
    { name: "Syawal", role: "Backend Developer", img: "/images/syawal.jpeg" },
    { name: "Aceng", role: "UI/UX Designer", img: "/images/aceng.jpeg" },
  ];

  return (
    <div className="container py-5">
      <h2 className="text-center mb-4 fw-bold">Meet Our Team</h2>
      <div className="row g-4">
        {team.map((person, index) => (
          <div key={index} className="col-md-4">
            <div className="card shadow-sm border-0 h-100">
              <img
                src={person.img}
                className="card-img-top"
                alt={person.name}
              />
              <div className="card-body text-center">
                <h5 className="card-title fw-bold">{person.name}</h5>
                <p className="card-text text-muted">{person.role}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
export default Team;
