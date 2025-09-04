import { useState } from "react";
import { signUpWithEmail } from "../../authHelper";  // ✅ use signup helper

function Email() {
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleSignup = async (e) => {
    e.preventDefault();
    const { error, message: successMessage } = await signUpWithEmail(email);
    if (error) setMessage(error);
    else setMessage(successMessage); // ✅ "Signup link sent!"
  };

  return (
    <div className="email1">
      <form onSubmit={handleSignup} className="email">
        <div className="blood">
          <input
            type="email"
            value={email}
            id="email"
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <label htmlFor="email">Email</label>
        </div>
        <button type="submit">Sign Up</button>
        <p>{message}</p>
      </form>
    </div>
  );
}

export default Email;
