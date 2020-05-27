import React from "react";

import "bootstrap3/dist/css/bootstrap.min.css";
import "./scss/styles.scss";
import Footer from "./Components/footer";

export default function App(props) {
  return (
    <div className="App">
      <div>{props.children}</div>
      <Footer />
    </div>
  );
}
