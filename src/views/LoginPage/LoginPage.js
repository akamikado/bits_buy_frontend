import { useGoogleLogin } from "@react-oauth/google";

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

  return <button onClick={() => login()}>Sign in with Google 🚀 </button>;
}

export default LoginPage;
