// src/pages/FinishSignIn.jsx
import { useEffect } from "react";
import { auth } from "../../firebase";
import { signInWithEmailLink } from "firebase/auth";

function FinishSignIn() {
  useEffect(() => {
    async function completeSignIn() {
      if (signInWithEmailLink(auth, window.location.href)) {
        let email = window.localStorage.getItem("emailForSignIn");
        if (!email) {
          email = window.prompt("Please provide your email for confirmation");
        }
        try {
          const result = await signInWithEmailLink(auth, email, window.location.href);
          console.log("User signed in:", result.user);
          window.localStorage.removeItem("emailForSignIn");
        } catch (error) {
          console.error("Error completing sign-in:", error);
        }
      }
    }

    completeSignIn();
  }, []);

  return (
    <div>
      <h2>Finishing sign-in…</h2>
    </div>
  );
}

export default FinishSignIn;
