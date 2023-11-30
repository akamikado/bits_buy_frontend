import { useState } from "react";
import Navbar from "../../components/navbar";
import UserForm from "../../components/UserForm";
import classes from "./UserProfile.module.css";
function UserProfile() {
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
      {/* Navbar */}
      {isNavbarOpen && <Navbar isOpen={isNavbarOpen} />}
      {!isNavbarOpen && (
        <div className={classes["user-profile-container"]}>
          <h1>User Profile</h1>
          <div className={classes["Input-box"]}>
            <UserForm className={classes["user-form"]} />
          </div>
        </div>
      )}
    </div>
  );
}

export default UserProfile;
