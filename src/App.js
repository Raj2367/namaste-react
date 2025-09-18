import React from "react";
import ReactDOM from "react-dom/client";
import Header from "./components/Header";
import Body from "./components/Body";

// const heading = React.createElement(
//   "h1",
//   { id: "heading" },
//   "Hello world from JAVAscript"
// );
// console.log(heading); // object

// React Component
// Class based component - OLD
// Functional component - NEW

const App = () => {
  return (
    <div className="app">
      <Header />
      <Body />
    </div>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<App />);
