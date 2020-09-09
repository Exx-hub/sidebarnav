import React from "react";
import { FaHome, FaReadme, FaPen } from "react-icons/fa";
import { IoMdContacts } from "react-icons/io";

export const sideBarData = [
  {
    title: "Home",
    path: "/",
    class: "nav-item",
    icon: <FaHome />,
  },
  {
    title: "Contact",
    path: "/Contact",
    class: "nav-item",
    icon: <IoMdContacts />,
  },
  {
    title: "About",
    path: "/About",
    class: "nav-item",
    icon: <FaReadme />,
  },
  {
    title: "Register",
    path: "/Register",
    class: "nav-item",
    icon: <FaPen />,
  },
];
