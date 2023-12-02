import { useState } from "react";
import Navbar from "../../components/navbar";

import classes from "./Chat.module.css";
function Chat() {
  const [isNavbarOpen, setIsNavbarOpen] = useState(false);
  const toggleNavbar = () => {
    setIsNavbarOpen((prevIsNavbarOpen) => !prevIsNavbarOpen);
  };
  const closeNavbar = () => {
    setIsNavbarOpen(false);
  };
  return (
    <div className={classes["home-page-container"]}>
      {!isNavbarOpen && (
        <button onClick={toggleNavbar} className={classes["nav-button"]}>
          &#9776;
        </button>
      )}
      {isNavbarOpen && (
        <div className={classes["overlay"]} onClick={closeNavbar}></div>
      )}
      
      {isNavbarOpen && <Navbar isOpen={isNavbarOpen} />}

      {!isNavbarOpen && <h1>Chat</h1>}
    </div>
  );
}

export default Chat;
