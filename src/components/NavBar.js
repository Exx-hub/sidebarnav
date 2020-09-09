import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FaBars } from "react-icons/fa";
import SideBarLinks from "./SideBarLinks";

function NavBar() {
  const [sideBar, setSideBar] = useState(false);

  console.log(sideBar);

  const showSideBar = () => {
    setSideBar(!sideBar);
  };
  return (
    <>
      <div className="navbar">
        <Link to="/#">
          <FaBars onClick={() => showSideBar(!sideBar)} className="bars" />
        </Link>
      </div>
      <SideBarLinks showSideBar={showSideBar} sideBar={sideBar} />
    </>
  );
}

export default NavBar;
