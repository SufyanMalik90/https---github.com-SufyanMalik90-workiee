import React from "react";
import "./Footer.scss";
import FacebookSharpIcon from '@mui/icons-material/FacebookSharp';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import TwitterIcon from '@mui/icons-material/Twitter';
import InstagramIcon from '@mui/icons-material/Instagram';
import PublicSharpIcon from '@mui/icons-material/PublicSharp';
import MonetizationOnSharpIcon from '@mui/icons-material/MonetizationOnSharp';
function Footer() {
  return (
    <div className="footer">
      <div className="container">
        <div className="top">
          <div className="item">
            <h2>Categories</h2>
            <span>Graphics & Design</span>
            <span>Digital Marketing</span>
            <span>Writing & Translation</span>
            <span>Video & Animation</span>
            <span>Music & Audio</span>
            <span>Programming & Tech</span>

          </div>
          <div className="item">
            <h2>About</h2>
            <span>Press & News</span>
            <span>Privacy Policy</span>
            <span>Terms of Service</span>
            <span>Contact Sales</span>
          </div>
          <div className="item">
            <h2>Support</h2>
            <span>Help & Support</span>
            <span>Selling on Workiee24</span>
            <span>Buying on Workiee24</span>
          </div>
          <div className="item">
            <h2>Community</h2>
            <span>Customer Success Stories</span>
            <span>Events</span>
            <span>Become a Seller</span>
          </div>
          <div className="item">
            <h2>More From Workiee24</h2>
            <span>Workiee24 Business</span>
              </div>
        </div>
        <hr />
        <div className="bottom">
          <div className="left">
            <h2>Workiee24</h2>
            <span>© Workiee24. 2024</span>
          </div>
          <div className="right">
            <div className="social">
            <span><FacebookSharpIcon/></span>
            <span><TwitterIcon/></span>
            <span><LinkedInIcon/></span>
            <span><InstagramIcon/></span>
            <span></span>
            </div>
            <div className="link">
         <PublicSharpIcon/>
              <span>English</span>
            </div>
            <div className="link">
            <MonetizationOnSharpIcon/>
              <span>Pkr</span>
            </div>

          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
