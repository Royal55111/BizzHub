import { getAuth, sendSignInLinkToEmail, fetchSignInMethodsForEmail } from "firebase/auth";
import { app } from "./firebase";

const auth = getAuth(app);

const actionCodeSettings = {
  url: "http://localhost:5173/finishSignIn", // 🔹 must exist as a route in your app
  handleCodeInApp: true,
};

// 🔹 Signup
export const signUpWithEmail = async (email) => {
  try {
    const methods = await fetchSignInMethodsForEmail(auth, email);

    if (methods.length > 0) {
      return { error: "Account already exists. Please login instead." };
    }

    await sendSignInLinkToEmail(auth, email, actionCodeSettings);
    window.localStorage.setItem("emailForSignIn", email);
    return { message: "Signup link sent! Please check your inbox." };
  } catch (error) {
    return { error: error.message };
  }
};

// 🔹 Login
export const loginWithEmail = async (email) => {
  try {
    const methods = await fetchSignInMethodsForEmail(auth, email);

    if (methods.length === 0) {
      return { error: "No account found. Please sign up first." };
    }

    await sendSignInLinkToEmail(auth, email, actionCodeSettings);
    window.localStorage.setItem("emailForSignIn", email);
    return { message: "Login link sent! Please check your inbox." };
  } catch (error) {
    return { error: error.message };
  }
};
