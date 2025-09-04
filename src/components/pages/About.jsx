function About(prop) {
  return (
    <div>
      <nav className="naver">
        <div className="naver-1">
          <img src="/good.png" alt="" />
          <h1>BizzHub</h1>
        </div>
        <div className="naver-2">
          <div onClick={prop.home}>
            <a href="#">Home</a>
          </div>
          <div>
            <a href="#">Help Center</a>
          </div>
          <div className="naver-icon">
            <a href="#">Resource's</a>
            <i className="bi-chevron-down"></i>
          </div>
        </div>
        <div className="naver-3">
          <div className="naver-3-1">
            <div>
              <h2 onClick={prop.sign}>SignUp</h2>
            </div>
            <div>
              <h2 onClick={prop.log}>LogIn</h2>
            </div>
          </div>
          <div className="lang">
            <i className="bi-globe"></i>
            <p>EN</p>
          </div>
        </div>
      </nav>
     
    </div>
  );
}
export default About;
