import { useState } from 'react'
import React from "react";
import "./App.css";
import UserCard from "./UserCard";

const Pagina1 = () => {
  const users = [
    {
      name: "Maria Latifa",
      title: "Desenvolvedora Senior",
      description: "Desenvolvedor web com experiência em React e Node.js",
      photo:
        "https://super.abril.com.br/wp-content/uploads/2021/07/SI_429_Oraculo_cachorrinho_FB.png"
    }
  ];

  return (
    <div className="App">
      <div className="user-card-container">
        {users.map((user, index) => (
          <UserCard
            key={index}
            name={user.name}
            title={user.title}
            description={user.description}
            photo={user.photo}
          />
        ))}
      </div>
    </div>
  );
};
export default Pagina1;
