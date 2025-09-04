import { useState } from "react";
import { loginWithEmail } from "../../authHelper";

function Login(prop) {
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleLogin = async (e) => {
    e.preventDefault();
    const { error, message: successMessage } = await loginWithEmail(email);
    if (error) setMessage(error);
    else setMessage(successMessage); // ✅ "Login link sent!"
  };

  return (
    <div className="login">
      <div className="login1">
        <h1>Log in</h1>
        <form className="foam" onSubmit={handleLogin}>
          <div className="input-box">
            <input
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
            <label htmlFor="email">Email</label>
          </div>
          <button type="submit">Continue with Email</button>
        </form>
        <p>{message}</p>
        <p>or</p>
        <div className="logor">
          <button>
            <img src="image.png" alt="" />
          </button>
          <button>
            <img src="890.png" alt="" />
          </button>
          <button>
            <img src="244.png" alt="" />
          </button>
        </div>
        <p>
          New to BizzHub?{" "}
          <a href="" onClick={prop.sign}>
            get started <i className="bi-arrow-right"></i>
          </a>
        </p>
      </div>
    </div>
  );
}

export default Login;
