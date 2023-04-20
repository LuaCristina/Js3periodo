import React from "react";
import "./App.css";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className="App">
      <div>
        <nav>
          <ul>
            <li>
              <Link to="/pagina1">Página 1</Link>
            </li>
            <li>
              <Link to="/pagina2">Página 2</Link>
            </li>
          </ul>
        </nav>
        </div>
    </div>
  );
};
export default Home;
