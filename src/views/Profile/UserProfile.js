import UserForm from "../../components/UserForm";
import classes from "./UserProfile.module.css";

function UserProfile() {
  return (
    <div className={classes['user-profile-container']}>
      <UserForm className={classes['user-form']}/>
      <h1>User Profile</h1>
    </div>
  );
}

export default UserProfile;