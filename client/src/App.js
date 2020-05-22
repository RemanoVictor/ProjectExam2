import React from "react";

import "bootstrap3/dist/css/bootstrap.min.css";
import "./scss/styles.scss";

export default function App(props) {
  return (
    <div className="App">
      <div className="[ container-fluid ]">{props.children}</div>
    </div>
  );
}
