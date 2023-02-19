import React from "react";
import ReactDOM from "react-dom";
import App,{Card} from "./components/App"
import Contact from "./contact"


//1. Apply CSS styles to App.jsx component
//to match the appearance on the completed app:
//https://c6fkx.csb.app/
//2. Extract the contact card as a reusable Card component.
//3. Use props to render the default Beyonce contact card
//so the Card component can be reused for other contacts.
//4. Import the contacts.js file to create card components.





ReactDOM.render(
  <App/>,
  document.getElementById("root")
);
