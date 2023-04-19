import React from "react";
import "./styles.css";
import UserCard from "./UserCard.js";

const App = () => {
  const user = {
    name: "João da Silva",
    title: "Desenvolvedor",
    description: "Desenvolvedor web com experiência em React e Node.js",
    photo:
      "https://avatars0.githubusercontent.com/u/993608?s=400&u=bb45ce7d4e959c006c033298b4f845625944a1fd&v=4"
  };

  return (
    <div className="App">
      <UserCard
        name={user.name}
        title={user.title}
        description={user.description}
        photo={user.photo}
      />
    </div>
  );
};
export default App;

