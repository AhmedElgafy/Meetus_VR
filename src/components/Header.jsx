import { Component } from "react";
import { SharedData } from "./App";
class Header extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <>
        <HeaderTop />
        <HeaderMid />
        <HeaderBot />
        <Navigate />
      </>
    );
  }
}
export default Header;
class HeaderTop extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <nav>
        <div className="header-top">
          <div className="logo">
            <img src="/Group 770.svg" alt="menu" id="hamburger" />
            <img src="/Group 769.svg" alt="logo" id="logo" />
          </div>
          <div className="offer">
            <img src="/Path 797.svg" alt="" />
            <p>
              Valentine’s Day Offers! Buy Two Get One Free <span>Shop Now</span>
            </p>
            <img src="/Path 796.svg" alt="" />
          </div>
          <div className="contacts">
            <div className="contact">
              <img src="/Group 756.svg" alt="" />
              <p>Contact Us</p>
            </div>
            <div className="contact">
              <img src="/Group 758.svg" alt="" />
              <p>Track Order</p>
            </div>
            <div className="contact">
              <img src="/Group 753.svg" alt="" />
              <p>Find A Store</p>
            </div>
          </div>
        </div>
      </nav>
    );
  }
}
class HeaderMid extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <SharedData.Consumer>
        {(value) => {
          const { toggleCartVisibility, cartItems } = value;
          return (
            <div className="header-mid">
              <div className="searchPar">
                <img src="/Path 774.svg" alt="" />
                <input type="text" placeholder="Search" />
              </div>
              <div className="brandLogo">
                <img src="/Group 745.svg" alt="" />
              </div>
              <div className="user-gadgets">
                <div
                  onClick={() => toggleCartVisibility()}
                  style={{ cursor: "pointer" }}
                >
                  <div className="cart-icon">
                    <img src="/Path 772.svg" alt="" />
                    <p
                      className="cart-counter"
                      style={{ position: "absolute" }}
                    >
                      {cartItems.length}
                    </p>
                  </div>

                  <p>Cart</p>
                </div>
                <div>
                  <img src="/Path 771.svg" alt="" />
                  <p>Wishlist</p>
                </div>
                <div>
                  <img src="/Path 773.svg" alt="" />
                  <p>Login</p>
                </div>
              </div>
            </div>
          );
        }}
      </SharedData.Consumer>
    );
  }
}
class HeaderBot extends Component {
  categories = [
    "Men",
    "Women",
    "Unisex",
    "Kids",
    "Best Sellers",
    "New Arrivals",
    "Offers",
  ];
  render() {
    return (
      <>
        <div className="header-bot">
          <div>
            {this.categories.map((ele, index) => {
              return <p key={index}>{ele}</p>;
            })}
          </div>
        </div>
      </>
    );
  }
}
class Navigate extends Component {
  navs = ["Men", "Clothing", "Tops", "Adidas", "Adidas Black T-shirt"];
  render() {
    return (
      <>
        <div className="Navigate">
          <div>
            {this.navs.map((ele, index) => {
              return index != this.navs.length - 1 ? (
                <p key={index}>{ele} /</p>
              ) : (
                <p key={index}>{ele}</p>
              );
            })}
          </div>
        </div>
      </>
    );
  }
}
