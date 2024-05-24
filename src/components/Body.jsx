import React from "react";
import { Component } from "react";
import getChosen from "../services/services";
import RightSide from "./Body/RightSide";
import LeftSide from "./Body/LeftSide";
import { SharedData } from "./App";
class Body extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: {
        chosen: {
          name: "",
          id: 0,
          images: [],
          colors: [],
          price: 0,
          sizes: [],
        },
      },
    };
  }
  componentDidMount() {
    getChosen().then((data) => this.setState({ data: data }));
  }
  // sizes = ["Small", "Medium", "Large", "X Large", "XX Large"];
  render() {
    // console.log(this.state.data.chosen);
    return (
      <SharedData.Consumer>
        {(value) => {
          const { updateItem } = value;
          return (
            <section className="product-section">
              <LeftSide data={this.state.data} />
              <RightSide
                // data={this.state.data}
                data={this.state.data.chosen}
              />
            </section>
          );
        }}
      </SharedData.Consumer>
    );
  }
}
export default Body;
