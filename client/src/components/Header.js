import React from "react";
import { NavLink } from "react-router-dom";

const Header = () => {
  const activeStyle = { color: "#F15B2A" };
  return (
    <nav className="nav-bar">
      <NavLink to="/" activeStyle={activeStyle} exact>
        GoodDay Bank
      </NavLink>
      {" | "}
      <NavLink to="/create" activeStyle={activeStyle}>
        Open Acount
      </NavLink>
    </nav>
  );
};

export default Header;
