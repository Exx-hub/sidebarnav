import React from "react";
import { Link } from "react-router-dom";

import { sideBarData } from "../helper/sideBarData";

function SideBarLinks({ showSideBar, sideBar }) {
  return (
    <nav className={sideBar ? "active" : ""}>
      <ul>
        {sideBarData.map((item, index) => {
          return (
            <li key={index} className={item.class}>
              <Link to={item.path} onClick={showSideBar}>
                <span className="icon">{item.icon}</span>{" "}
                <span className="title">{item.title}</span>
              </Link>
            </li>
          );
        })}
      </ul>
    </nav>
  );
}

export default SideBarLinks;

// can be written like this too instead of a helper data array. for me it's the same

/* <Link to="/" onClick={showSideBar}>
          <FaHome />
          Home
        </Link>
        <Link to="/Contact" onClick={showSideBar}>
          <IoMdContacts />
          Contact
        </Link>
        <Link to="/About" onClick={showSideBar}>
          <FaReadme />
          About
        </Link>
        <Link to="/Register" onClick={showSideBar}>
          <FaPen /> Register
        </Link> */
