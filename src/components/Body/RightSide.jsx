import { Component } from "react";
import { SharedData } from "../App";

class RightSide extends Component {
  constructor(props) {
    super(props);
    this.state = {
      qty: 1,
    };
  }
  rates = [1, 1, 1, 1, 1];

  render() {
    const { name, price, colors, images, sizes, id } = this.props.data;
    const product = {
      id: id,
      name: name,
      image: images[0],
      price: price,
      sizes: sizes,
      colors: colors,
      qty: this.state.qty,
    };
    return (
      <>
        <SharedData.Consumer>
          {(value) => {
            const { addToCart, updateItem } = value;
            // console.log(value);
            return (
              <div className="product-info">
                <div className="product-brand">
                  <img src="/Group 346.svg" alt="" />
                  <p>{product.name}</p>
                  <p>Men</p>
                </div>
                <div className="rating">
                  <div>
                    {this.rates.map((ele, index) => {
                      return index != this.rates.length - 1 ? (
                        <img key={index} src="/Path 368.svg" />
                      ) : (
                        <img key={index} src="/Path 369.svg" />
                      );
                    })}
                  </div>
                  <p>4.9 of 5</p>
                  <p>22 Rates</p>
                </div>
                <div className="pricing">
                  <h1>
                    {product.price.toLocaleString("en-US")} <span>LE</span>
                  </h1>
                  <h4>
                    {product.price.toLocaleString("en-US")}
                    <span>LE</span>
                  </h4>
                  <div className="offerPresent">
                    <p>30% Off</p>
                  </div>
                </div>
                <h1 style={{ fontWeight: "600" }}>Size</h1>
                <div className="sizes">
                  {product.sizes.map((ele, index) => (
                    <p key={index}>{ele}</p>
                  ))}
                </div>
                <div className="color">
                  {product.colors.map((ele, index) => {
                    return <img key={index} src={ele} />;
                  })}
                </div>
                <div className="quantity">
                  <h1>Quantity</h1>
                  <div className="counter">
                    <div
                      onClick={() => {
                        this.setState({ qty: this.state.qty + 1 });
                        product.qty = this.state.qty + 1;
                        updateItem(product);
                      }}
                    >
                      <img src="/Path 363.svg" alt="" />
                    </div>
                    <p>{product.qty}</p>
                    <div
                      onClick={() => {
                        this.setState({
                          qty: this.state.qty != 1 ? this.state.qty - 1 : 1,
                        });
                        (product.qty =
                          this.state.qty != 1 ? this.state.qty - 1 : 1),
                          updateItem(product);
                      }}
                    >
                      <img src="/Path 364.svg" alt="" />
                    </div>
                  </div>
                </div>
                <div className="btns">
                  <button onClick={() => addToCart(product)}>
                    Add To Cart
                  </button>
                  <button>Pickup From Store</button>
                </div>
              </div>
            );
          }}
        </SharedData.Consumer>
      </>
    );
  }
}
export default RightSide;
