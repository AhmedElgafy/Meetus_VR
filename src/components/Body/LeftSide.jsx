import { Component } from "react";

class LeftSide extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    this.props;
    return (
      <>
        <div className="product-images">
          <div style={{ position: "relative" }}>
            <img
              className="hero-image"
              src={this.props.data.chosen.images[0]}
              alt=""
            />
            <img src="/Group 338.svg" alt="" className="angleImage" />
          </div>

          <div className="selectable-section">
            <img src="/Path 347.svg" alt="" />
            <div className="selectable-image">
              {this.props.data.chosen.images.map((ele, index) => {
                return <img src={ele} key={index} />;
              })}
            </div>
            <img src="/Path 346.svg" alt="" />
          </div>
        </div>
      </>
    );
  }
}
export default LeftSide;
