function SignUp(prop) {
  return (
    <div className="sign">
      <div className="sign1">
        <h1>SignUp</h1>
        <button>
          <img src="image.png" alt="" /> Sign up with Google
        </button>
        <button>
          <img src="244.png" alt="" />
          Sign up with Apple
        </button>
        <button>
          <img src="890.png" alt="" />
          Sign up with Facebook
        </button>
        <button onClick={prop.emailsign}>
          <img src="390.png" alt="" />
          Sign up with Email
        </button>
          <span>or</span>
          <p>Already have a BizzHub account? <a href="" onClick={prop.log}>Log in <i className="bi-arrow-right"></i></a> </p>
          <p className="sig">By proceeding, you agree to the <a href="">Terms and Conditions</a><br /> and <a href="">Privacy Policy</a></p>
      </div>
    </div>
  );
}
export default SignUp;
