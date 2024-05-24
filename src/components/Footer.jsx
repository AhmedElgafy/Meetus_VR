import { Component } from "react";

class Footer extends Component {
  aboutUs = [
    "About Us",
    "Contact Us",
    "Track Order",
    "Terms & Conditions",
    "Privacy Policy",
    "Sell With Us",
    "Shipping And Returns",
  ];
  socialMediaImages = [
    "/Group 1432.svg",
    "/Group 1433.svg",
    "/Group 1434.svg",
    "/Group 1435.svg",
  ];
  paymentImages = ["/Rectangle 586.png", "/Group 1437.png", "/Group 1438.png"];
  render() {
    return (
      <footer>
        <div className="footer">
          <div>
            <section className="About-Us">
              <img src="/Group 1436.svg" alt="" />
              <p>
                Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed
                diam nonummy nibh euismod tincidunt ut laoreet dolore magna
                aliquam erat volutpat. Ut wisi enim ad minim veniam, quis
                nostrud exerci tation ullamcorper suscipit lobortis nisl ut
                aliquip ex ea commodon ullamcorper suscipit lobortis nisl ut
                aliquip ex ea commodo
              </p>
              <p>
                consequat. Duis autem vel eum iriure dolor in hendrerit in
                vulputate velit esse molestie consequat, vel illum dolore eu
                feugiat nulla. Lorem ipsum dolor sit amet, consectetuer
                adipiscing elit, sed dia m nonummy nibh euismod tincidunt ut
                laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad
                minim veniam, quis nostrud exerci tatio
              </p>
              <p>
                consequat. Duis autem vel eum iriure dolor in hendrerit in
                vulputate velit esse molestie consequat, vel illum dolore eu
                feugiat nulla facilisis at vero eros et accumsan et iusto odio
                dignissim qui blandit
              </p>
            </section>
            <section className="subscribe">
              <div className="subscription">
                <h1>Subscribe to our newsletter</h1>
                <div style={{ position: "relative" }}>
                  <input type="text" placeholder="Enter Your Mail" />
                  <div className="subscribe-btn">
                    <p>Subscribe</p>
                    <img src="Group 1431.svg" alt="" />
                  </div>
                </div>
              </div>
              <div>
                <div className="about-us">
                  {this.aboutUs.map((ele, index) => {
                    return <p key={index}>{ele}</p>;
                  })}
                </div>
                <div className="social-media">
                  {this.socialMediaImages.map((ele, index) => {
                    return (
                      <div key={index}>
                        <img src={ele} alt="" />
                        <p>/YESHTERY</p>
                      </div>
                    );
                  })}
                </div>
              </div>
            </section>
          </div>
          <div className="copy-rights">
            <h5>© 2021 yeshtery, all rights reserved.</h5>
            <div>
              {this.paymentImages.map((ele, index) => {
                return <img src={ele} key={index} />;
              })}
            </div>
            <div>
              <h4>Powered By</h4>
              <img src="/Group 1439.svg" alt="" />
            </div>
          </div>
        </div>
      </footer>
    );
  }
}
export default Footer;
