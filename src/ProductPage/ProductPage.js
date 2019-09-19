import React, { Component } from "react";
import "./ProductPage.css";
import Header from "../Header/Header";
import NormalView from "../NormalView/NormalView";
import PlacardView from "../PlacardView/PlacardView";

class ProductPage extends Component {
  render() {
    return (
      <div className="Product_Page">
        <Header path={this.props.match.path} />
        <NormalView />
        <PlacardView />
      </div>
    );
  }
}

export default ProductPage;
