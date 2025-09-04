import GlobeView from "../globeview";
import { useEffect, useState } from "react";

function Home(prop) {
 
  return (
    <div>
      <nav className="naver">
        <div className="naver-1">
          <img src="/good.png" alt="" />
          <h1>BizzHub</h1>
        </div>
        <div className="naver-2">
          <div>
            <a href="#">Help Center</a>
          </div>
          <div className="naver-icon">
            <a href="#">Resource's</a>
            <i className="bi-chevron-down"></i>
          </div>
          <div onClick={prop.about}>
            <a href="#">About Us</a>
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
      <section className="hero">
        <h1>Welcome to BizzHub</h1>
        <h3>Your trusted digital market space</h3>
      </section>
      <div className="hglobe">
        <h1>Sell, Buy and Advertise Around the Globe</h1>
      </div>
      <section className="globe">
        <div className="globe-1">
          <GlobeView />
          <button>Start Now</button>
        </div>
        <div className="globe-2">
          <h2>Connect with business</h2>
          <h2>people around the World</h2>
        </div>
      </section>
      <div className="idea">
        <h1>GIVING PEOPLE THE WORK THEY DESERVE</h1>
      </div>
      <section className="peeps">
        <p>Grow with Social Media</p>
        <p> also get the Best of Seurity to keep you Protected at all Times.</p>
        <section className="idear">
          <div className="idear1">
            <div className="idear1-1"></div>
            <div className="idear1-2"></div>
          </div>
          <div className="idear2">
            <div className="idear2-1">
              <div className="idear4"></div>
              <div className="idear5"></div>
            </div>
            <div className="idear2-2">
              <div className="idear6"></div>
              <div className="idear7"></div>
            </div>
          </div>
        </section>
      </section>
      <section className="now1">
        <div className="now">
          
        </div>
      </section>
      <footer className="footer">
        <div className="footer1">
          <img src="/good.png" alt="" />
          <h1>BizzHub</h1>
        </div>
        <h2 className="copyright">&copy; 2026 DocStandardCo-operation. All rights reserved.</h2>
      </footer>
    </div>
  );
}

export default Home;
