import React from "react";
import { NavLink } from "react-router-dom";

const Header = () => (
  <header>
    <ul className="main-nav">
      <li>
        <NavLink exact to="/" activeStyle={{ background: "tomato" }}>
          Home
        </NavLink>
      </li>
      <li>
        <NavLink to="/search/cats">Cats</NavLink>
      </li>
      <li>
        <NavLink to="/search/dogs">Dogs</NavLink>
      </li>
      <li>
        <NavLink to="/search/computers">Computers</NavLink>
      </li>
    </ul>
  </header>
);

export default Header;
