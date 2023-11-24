import UserForm from "../components/UserForm";
import classes from "./UserProfile.module.css";
function UserProfile() {
  return (
      <div className={classes["user-profile-container"]}>
        <h1>User Profile</h1>
        <div className={classes["Input-box"]}>
          <UserForm className={classes["user-form"]} />
        </div>
      </div>
  );
}

export default UserProfile;
