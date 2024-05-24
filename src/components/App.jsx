import Header from "./Header";
import Body from "./Body";
import Suggestions from "./Suggestions";
import Footer from "./Footer";
import { lazy, Suspense } from "react";
import React, { Component } from "react";
const Cart = lazy(() => import("./Cart"), 10000);
// console.log(Cart);

const SharedData = React.createContext({});
class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      cartVisibility: false,
      cartItems: [],
    };
  }
  cartHasThatItem = (cartItem) => {
    return (
      this.state.cartItems.find((ele) => {
        // console.log(ele.id, cartItem.id);
        return ele.id == cartItem.id;
      }) != undefined
    );
  };
  addToCart = (cartItem) => {
    // console.log(this.cartHasThatItem(cartItem));
    !this.cartHasThatItem(cartItem) &&
      this.setState({
        cartItems: [...this.state.cartItems, cartItem],
      });
    // console.log(this.state.cartItems);
  };
  removeFromCart = (id) => {
    this.setState({
      cartItems: this.state.cartItems.filter((ele, index) => {
        console.log(ele, id);
        return ele.id != id;
      }),
    });
  };
  updateItem = (updatedItem) => {
    this.setState({
      cartItems: this.state.cartItems.map((ele) => {
        if (ele.id == updatedItem.id) ele = updatedItem;
        return ele;
      }),
    });
  };
  toggleCartVisibility = () => {
    this.setState({
      cartVisibility: this.state.cartVisibility ? false : true,
    });
  };
  render() {
    // console.log(this.state);
    const { cartVisibility, cartItems } = this.state;
    const { toggleCartVisibility, removeFromCart, addToCart, updateItem } =
      this;
    return (
      <>
        <SharedData.Provider
          value={{
            cartVisibility: cartVisibility,
            cartItems: cartItems,
            toggleCartVisibility: toggleCartVisibility,
            addToCart: addToCart,
            removeFromCart: removeFromCart,
            updateItem: updateItem,
          }}
        >
          <Header />
          <Body />
          <Suggestions />
          <Footer />
          <Suspense fallback={<p>Loading</p>}>
            {this.state.cartVisibility && <Cart />}
          </Suspense>
        </SharedData.Provider>
      </>
    );
  }
}

export { SharedData };
export default App;
