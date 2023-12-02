import { useGoogleLogin } from "@react-oauth/google";
import { Button as MantineButton } from "@mantine/core";
import classes from "./LoginPage.module.css";
import "fontsource-roboto";
function LoginPage() {
  const login = useGoogleLogin({
    onSuccess: async (tokenResponse) => {
      console.log(tokenResponse);
      const response = await fetch(
        "https://www.googleapis.com/oauth2/v3/userinfo",
        {
          headers: { Authorization: `Bearer ${tokenResponse.access_token}` },
        }
      );
      const userInfo = await response.json();
      const checkProfileFilled = await fetch("localhost:8080/", {
        method: "POST",
        body: JSON.stringify(userInfo.email.substring(0, 9)),
      });
    },
    hosted_domain: "hyderabad.bits-pilani.ac.in",
  });

  return (
    <div className={classes["login-page"]}>
    <div>
    <p className={classes['experience-text']}>experience</p>
      <h1 className={classes['bitsbuy-header']}>BITSBUY</h1>
    </div>
      <MantineButton onClick={login} className={classes["login-button"]}>
        Login with Google
      </MantineButton>
    </div>
  );
}

export default LoginPage;