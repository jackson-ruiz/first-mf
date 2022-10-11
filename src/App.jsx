import React from "react";
import ReactDOM from "react-dom";

import "./index.scss";
import SamplePage from "./pages/SamplePage";

const App = () => <SamplePage />;
ReactDOM.render(<App />, document.getElementById("app"));
