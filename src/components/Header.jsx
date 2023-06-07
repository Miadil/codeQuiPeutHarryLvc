import { Link } from "react-router-dom";
import viteLogo from "/vite.svg";

import "./Header.css";

const Header = () => {
  return (
    <>
      <header className="headGlobal">
        <a href="https://vitejs.dev">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/characters">Characters</Link>
          </li>
          <li>
            <Link to="/contact">Contact</Link>
          </li>
        </ul>
      </header>
    </>
  );
};

export default Header;
