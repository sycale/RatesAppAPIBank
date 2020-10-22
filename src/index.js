import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import * as serviceWorker from "./serviceWorker";
import "bootstrap/dist/css/bootstrap.min.css";
import "react-datepicker/dist/react-datepicker-cssmodules.min.css";
ReactDOM.render(<App />, document.getElementById("root"));

serviceWorker.unregister();
