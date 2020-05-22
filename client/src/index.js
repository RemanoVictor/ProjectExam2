import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import App from "./App";
import Home from "./Pages/Home";
import VenueSpecific from "./Pages/Venuespecific";
import Dashboard from "./Pages/Dashboard";
import Contact from "./Pages/Contact";
import * as serviceWorker from "./serviceWorker";

ReactDOM.render(
  <Router>
    <App>
      <Switch>
        <Route path="/" exact component={Dashboard} />
        <Route path="/Contact" component={Contact} />
        <Route path="/Home" exact component={Home} />
        <Route path="/VenueSpecific/:id" exact component={VenueSpecific} />
      </Switch>
    </App>
  </Router>,
  document.getElementById("root")
);

serviceWorker.unregister();
