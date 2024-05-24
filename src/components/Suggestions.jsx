import { Component } from "react";
import { getSuggestions } from "../services/services";
class Suggestions extends Component {
  constructor(props) {
    super(props);
    this.state = {
      suggestions: [
        {
          productName: "",
          image: "",
          price: 0,
          rate: 0,
          brandImage: "",
          discount: "",
          shipping: {
            inSide: { from: "" },
            outSide: { from: "", to: "", timeInDays: 0 },
          },
        },
      ],
    };
  }
  async componentDidMount() {
    const data = await getSuggestions();
    // console.log(data);
    this.setState({ suggestions: data });
  }
  render() {
    return (
      <>
        <section className="suggestions">
          <div className="header">
            <h1>Similar Products</h1>
            <h3>You may like these products also</h3>
          </div>
          <div className="scrollable-carts">
            {this.state.suggestions.map((ele, index) => {
              // console.log(ele.shipping.inSide && ele.shipping.inSide.from);
              // console.log(ele.shipping);
              return (
                <div key={index} className="card">
                  <div>
                    <div className="suggestionImage">
                      <img src={ele.image} alt="" />
                      <img src="/Group 338.svg" alt="" className="angleImage" />
                    </div>
                    <h4>{ele.productName}</h4>
                  </div>
                  <div className="price-row">
                    <div className="price">
                      <h4>
                        {ele.price.toLocaleString("en-US")}
                        <span> LE</span>
                      </h4>
                      <div>
                        <h5>
                          {ele.price.toLocaleString("en-US")}
                          <span> LE</span>
                        </h5>
                        <h5>{ele.discount}</h5>
                      </div>
                    </div>
                    <div className="brandImage">
                      <img src={ele.brandImage} alt="" />
                    </div>
                  </div>
                  {rating(ele.rate)}
                  <div className="shipping">
                    {ele.shipping.inSide ? (
                      <h6 style={{ margin: "0 auto" }}>
                        Pickup From: <span>{ele.shipping.inSide.from}</span>
                      </h6>
                    ) : (
                      <>
                        {/* {ele.inSide} */}
                        <h6>
                          From: <span>{ele.shipping.outSide.from}</span>
                        </h6>
                        <h6>
                          To: <span>{ele.shipping.outSide.to}</span>
                        </h6>
                        <h6>
                          In:{" "}
                          <span>{ele.shipping.outSide.timeInDays} Days</span>
                        </h6>
                      </>
                    )}
                  </div>
                </div>
              );
            })}
          </div>
        </section>
      </>
    );
  }
}
export default Suggestions;
function rating(rateNumber) {
  rateNumber = Number(rateNumber);
  const ratingArr = [];
  for (let i = 1; i <= rateNumber + 1; i++) {
    ratingArr.push(
      i < rateNumber ? (
        <img src="/Path 368.svg" alt="" key={i} />
      ) : (
        <img src="/Path 369.svg" alt="" key={i} />
      )
    );
  }
  return (
    <div className="rating">
      <div className="stars">{ratingArr}</div>
      <p>{rateNumber + " of 5"}</p>
    </div>
  );
}
