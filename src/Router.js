import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import App from "./App/App";
import Login from "./Login/Login";
import SignUp from "./SignUp/SignUp";
import ProductPage from "./ProductPage/ProductPage";

const Router = () => (
  <BrowserRouter>
    <Switch>
      <Route exact path="/" component={App} />
      <Route exact path="/sign-in" component={Login} />
      <Route exact path="/sign-up" component={SignUp} />
      <Route exact path="/home" component={ProductPage} />
    </Switch>
  </BrowserRouter>
);

export default Router;
