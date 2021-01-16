import React from "react";
import { MenuItems } from "../MenuItems";
import "./NavbarStyles.css";

const Navbar = () => {
  return (
    <nav className="container">
      <div className="title-style">Library system</div>
      <ul className="nav-menu">
        {MenuItems.map((item, index) => {
          return (
            <li key={index}>
              <a href={"#"} className={item.className}>
                {item.title}
              </a>
            </li>
          );
        })}
      </ul>
    </nav>
  );
};

export default Navbar;
