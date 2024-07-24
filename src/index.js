"use strict";
// its not allowed to use any Imports here..
// react refresh will fail to work and just refresh the whole page

require("./setup");

const { App } = require("./App");
const { createRoot } = require("react-dom/client");

createRoot(document.getElementById("root")).render(<App />);