import React from "react";
import ReactDOM from "react-dom";
import "glamor/reset";

import availableDomains from "./availableDomains";
import LandingPage from "./components/LandingPage";
import registerServiceWorker from "./registerServiceWorker";

ReactDOM.render(
  <LandingPage availableDomains={availableDomains} />,
  document.getElementById("root")
);
registerServiceWorker();
