import React from "react";
import ReactDOM from "react-dom/client";

const parent = React.createElement("div", {id:"parent"}, [React.createElement("div", {id: "child1"}, [React.createElement("h1", {}, "I am h1 tag"), React.createElement("h2", {}, "I am h2 tag")]), React.createElement("div", {id: "child2"}, [React.createElement("h3", {}, "I am h3 tag"), React.createElement("h4", {}, "I am h4 tag")])])

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(parent);