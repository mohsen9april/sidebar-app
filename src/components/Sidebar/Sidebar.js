import React from "react";
import { motion } from "framer-motion";
import { FaHome, FaUser, FaLock, FaBars } from "react-icons/fa";
import { NavLink } from "react-router-dom";
import { useState } from "react";

const routes = [
  {
    path: "/",
    name: "Home",
    icon: <FaHome />,
  },
  {
    path: "/About",
    name: "About",
    icon: <FaUser />,
  },
  {
    path: "/Products",
    name: "Products",
    icon: <FaLock />,
  },
];

const Sidebar = ({ children }) => {
  const [isOpen, setIsOpen] = useState(true);

  const toggle = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <div className="main-container">
        <motion.div animate={{ width: isOpen ? "200px" : "35px" }} className="sidebar">
          <div className="top_section">
            {isOpen && <h3 className="logo">Do Somthing</h3>}
            <div className="bars">
              <FaBars onClick={toggle} />
            </div>
          </div>
          <section className="routes">
            {routes.map((route) => {
              return (
                <>
                  <NavLink to={route.path} key={route.name} className="link">
                    <div className="icon"> {route.icon}</div>
                    <div className="link_text"> {route.name}</div>
                  </NavLink>
                </>
              );
            })}
          </section>
        </motion.div>
        <main>{children}</main>
      </div>
    </>
  );
};

export default Sidebar;
