import React from "react";
import ReactDOM from "react-dom";
import "glamor/reset";
import queryString from "query-string";

import availableDomains from "./availableDomains";
import LandingPage from "./components/LandingPage";
import HomeScreen from "./components/HomeScreen";
import registerServiceWorker from "./registerServiceWorker";

const { q } = queryString.parse(location.search); // eslint-disable-line
const isQueriedDomainValid =
  availableDomains.map(arr => arr.join("")).indexOf(q) > -1;

ReactDOM.render(
  isQueriedDomainValid ? <LandingPage queriedDomain={q} /> : <HomeScreen />,
  document.getElementById("root")
);
registerServiceWorker();
