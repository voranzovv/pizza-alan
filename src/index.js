import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Home from "./components/Home";

ReactDOM.render(
  <Router>
    <Route path="/" component={Home} exact />
  </Router>,
  document.getElementById("root")
);
