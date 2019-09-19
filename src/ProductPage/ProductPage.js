import React, { Component } from "react";
import "./ProductPage.css";
import Header from "../Header/Header";
import NormalView from "../NormalView/NormalView";
import PlacardView from "../PlacardView/PlacardView";
import Contact from "../Contact/Contact";

class ProductPage extends Component {
  render() {
    return (
      <div className="Product_Page">
        <Header path={this.props.match.path} />
        <NormalView />
        <PlacardView />
        <Contact />
      </div>
    );
  }
}

export default ProductPage;
