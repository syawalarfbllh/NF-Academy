// src/pages/Team.jsx
import React from "react";

const members = [
  { name:"Ghiya", role:"Frontend", img:"img/1111.png" },
  { name:"Syawal", role:"Backend", img:"img/syawal.jpeg" },
  { name:"Aceng", role:"UI/UX", img:"img/aceng.jpeg" }
];

export default function Team(){
  return (
    <div className="container py-5">
      <h2 className="text-light mb-4">Our Team</h2>
      <div className="row g-4">
        {members.map((m,i) => (
          <div key={i} className="col-md-4">
            <div className="card bg-dark bg-opacity-40 border-0 text-center p-3 shadow-sm">
              <img src={m.img} alt={m.name} className="rounded-circle mx-auto d-block" style={{width:140,height:140,objectFit:"cover"}} />
              <div className="card-body">
                <h5 className="text-light">{m.name}</h5>
                <p className="text-light">{m.role}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
