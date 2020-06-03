import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import App from "./App";
import Home from "./Pages/User/Home";
import Dashboard from "./Pages/Admin/Dashboard";
import Contact from "./Pages/User/Contact";
import ContactMessages from "./Pages/Admin/Messages";
import VenueSpecific from "./Pages/User/Venuespecific";
import VenueEnquiry from "./Pages/User/Enquiries";
import UserEnquiries from "./Pages/Admin/UserEnquiries";
import AddVenue from "./Pages/Admin/AddVenue";
import AllVenues from "./Pages/User/AllVenues";
import * as serviceWorker from "./serviceWorker";

ReactDOM.render(
  <Router>
    <App>
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/Dashboard" exact component={Dashboard} />
        <Route path="/Contact" component={Contact} />
        <Route path="/Messages" component={ContactMessages} />
        <Route path="/VenueSpecific/:id" exact component={VenueSpecific} />
        <Route path="/Enquiries" component={VenueEnquiry} />
        <Route path="/UserEnquiries" component={UserEnquiries} />
        <Route path="/AddVenue" component={AddVenue} />
        <Route path="/AllVenues" component={AllVenues} />
      </Switch>
    </App>
  </Router>,
  document.getElementById("root")
);

serviceWorker.unregister();
