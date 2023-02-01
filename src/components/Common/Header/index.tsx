import React from "react";
import { Link } from "react-router-dom";

const Header = () => (
  <nav>
    <ul>
      <li>
        <Link to="/">Home</Link>
      </li>
      <li>
        <Link to="/diary">Diary</Link>
      </li>
      <li>
        <Link to="/new">New</Link>
      </li>
      <li>
        <Link to="/edit">Edit</Link>
      </li>
    </ul>
  </nav>
);

export default Header;
