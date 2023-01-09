import React from "react";
import { motion } from "framer-motion";

const Sidebar = ({ children }) => {
  return (
    <>
      <div className="main-container">
        <motion.div animate={{ width: "200px" }} className="sidebar">
          <main> {children} </main>
        </motion.div>
      </div>
    </>
  );
};

export default Sidebar;
