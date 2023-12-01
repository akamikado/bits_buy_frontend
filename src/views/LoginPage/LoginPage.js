import { GoogleLogin, useGoogleOneTapLogin } from "@react-oauth/google";
import { redirect } from 'react-router-dom';

function LoginPage() {
  useGoogleOneTapLogin({
    onSuccess:async (credentialResponse) => {
      const response = await fetch(
        "https://www.googleapis.com/oauth2/v3/userinfo",
        {
          headers: { Authorization: `Bearer ${credentialResponse}` },
        }
      );
      const userInfo = await response.json();
      const checkProfileFilled = await fetch("localhost:8080/", {
        method: "POST",
        body: JSON.stringify(userInfo.email.substring(0, 9)),
      });
    },
    onError: () => {
      console.log('Login Failed');
    },
    hosted_domain: 'hyderabad.bits-pilani.ac.in'
  });
  
  return <GoogleLogin
    onSuccess={async credentialResponse => {
      console.log(credentialResponse)
      const response = await fetch(
        "https://www.googleapis.com/oauth2/v3/userinfo",
        {
          headers: { Authorization: `Bearer ${credentialResponse}` },
        }
      );
      const userInfo = await response.json();
      const checkProfileFilled = await fetch("localhost:8080/", {
        method: "POST",
        body: JSON.stringify(userInfo.email.substring(0, 9)),
      });
    }}
    onError={() => {
      console.log('Login Failed');
    }}
    hosted_domain='hyderabad.bits-pilani.ac.in'
    useOneTap
  />
}

export default LoginPage;