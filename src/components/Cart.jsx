import { Component } from "react";
import { SharedData } from "./App";
class Cart extends Component {
  constructor(props) {
    super(props);
    console.log("i am here");
  }
  render() {
    return (
      <>
        <SharedData.Consumer>
          {(value) => {
            // console.log(value);
            const data = value.cartItems;
            const dData = { name: "", price: 0, image: "", id: 0, qty: 0 };
            let { name, price, image, id, qty } = dData;
            if (data && data.length) {
              // console.log("there is data");
              ({ name, price, image, id, qty } = data[0]);
            }
            const { cartVisibility, toggleCartVisibility, removeFromCart } =
              value;
            const product = {
              name: name,
              image: image,
              price: price,
              qty: qty,
              id: id,
            };
            const totalPrice = 15999;

            // console.log(name, price, image, id, qty);
            // console.log(data);
            // console.log(data == undefined);
            return (
              <div
                className="cart"
                style={{
                  display: cartVisibility ? "block" : "none",
                }}
              >
                <div className="cart-header">
                  <div style={{ alignSelf: "end" }}>
                    <img
                      style={{ cursor: "pointer" }}
                      onClick={() => cartVisibility && toggleCartVisibility()}
                      src="Group 1440.svg"
                      alt=""
                    />
                  </div>
                  <h1 style={{ alignSelf: "center" }}>My Cart</h1>
                  <h3>Cart Summary</h3>
                  {data && data.length ? (
                    <div className="cart-card">
                      <div className="productImage">
                        <img src={product.image} alt="" />
                      </div>
                      <div className="productInfo">
                        <h4>{product.name}</h4>
                        <h6>Quantity: {product.qty}</h6>
                        <h4>{product.price.toLocaleString("en-US")} LE</h4>
                      </div>
                      <button
                        style={{ cursor: "pointer" }}
                        className="rm-btn"
                        onClick={() => {
                          console.log("hi");
                          removeFromCart(product.id);
                        }}
                      >
                        Remove
                      </button>
                    </div>
                  ) : (
                    <p>There is no product added</p>
                  )}
                  <h2 className="Total">
                    Total:{" "}
                    {(product.price * product.qty).toLocaleString("en-US")} LE
                  </h2>
                  <div className="ending-btns">
                    <button className="review-btn">Review Cart</button>
                    <button className="complete-btn">Complete Checkout</button>
                  </div>
                </div>
              </div>
            );
          }}
        </SharedData.Consumer>
      </>
    );
  }
}
export default Cart;
