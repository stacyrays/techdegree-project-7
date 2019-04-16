import React from "react";
import { NavLink } from "react-router-dom";

const Nav = props => {
  //const { players, title } = props;
  return (
    <nav class="main-nav">
      <ul>
        <li>
          <NavLink to="/cats" activeClassName="somethingElse">
            Cats
          </NavLink>
        </li>
        <li>
          <NavLink to="/dogs">Dogs</NavLink>
        </li>
        <li>
          <NavLink to="/computers">Computers</NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default Nav;
