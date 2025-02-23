import React from "react"
import { createRoot } from "react-dom/client"

const Pizza = (props) => {
  return React.createElement("div", {}, [
    React.createElement("h1", {}, props.name),
    React.createElement("p", {}, props.description),
  ]);
};

const App = () => {
  return React.createElement("div", {}, [
    React.createElement("h1", {}, "Padre Gino's"),
    React.createElement(Pizza,{
        name:"The Peperoni Pizza",
        description:"some dope pizza yo"
    }),
    React.createElement(Pizza, {
        name: "The Hawaiian",
        description:"The Pineapple and ham, wtf America"
    }),
    React.createElement(Pizza,{
        name:"Chicken Pizza",
        description:"Chicken nuggies on your pizza."
    }),
    React.createElement(Pizza,{
        name:"Tomato Pizza",
        description:"Chicken nuggies on your pizza."
    }),
    React.createElement(Pizza, {
        name:"Fish Pizza",
        description:"Chicken nuggies on your pizza."
    }),
  ]);
};

const container = document.getElementById("root");
const root = createRoot(container);
root.render(React.createElement(App));
