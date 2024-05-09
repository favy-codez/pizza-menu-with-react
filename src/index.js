import React from "react";
import "./index.css";
import ReactDOM from "react-dom/client";
// React before 18 that is react 17
// import ReactDOM from "react-dom";

// const pizzaData = [
//   {
//     name: "Focaccia",
//     ingredients: "Bread with italian olive oil and rosemary",
//     price: 6,
//     photoName: "pizzas/focaccia.jpg",
//     soldOut: false,
//   },
//   {
//     name: "Pizza Margherita",
//     ingredients: "Tomato and mozarella",
//     price: 10,
//     photoName: "pizzas/margherita.jpg",
//     soldOut: false,
//   },
//   {
//     name: "Pizza Spinaci",
//     ingredients: "Tomato, mozarella, spinach, and ricotta cheese",
//     price: 12,
//     photoName: "pizzas/spinaci.jpg",
//     soldOut: false,
//   },
//   {
//     name: "Pizza Funghi",
//     ingredients: "Tomato, mozarella, mushrooms, and onion",
//     price: 12,
//     photoName: "pizzas/funghi.jpg",
//     soldOut: false,
//   },
//   {
//     name: "Pizza Salamino",
//     ingredients: "Tomato, mozarella, and pepperoni",
//     price: 15,
//     photoName: "pizzas/salamino.jpg",
//     soldOut: true,
//   },
//   {
//     name: "Pizza Prosciutto",
//     ingredients: "Tomato, mozarella, ham, aragula, and burrata cheese",
//     price: 18,
//     photoName: "pizzas/prosciutto.jpg",
//     soldOut: false,
//   },
// ];

function App() {
  return (
    <div>
      <Header />
      <Menu />
      <Footer />
    </div>
  );
}

function Header() {
  return <h1>Fast React Pizza Co.</h1>;
}

function Menu() {
  return (
    <div>
      <h2>Our Menu</h2>
      <Pizza />
      <Pizza />
      <Pizza />
      <Pizza />
    </div>
  );
}

function Footer() {
  // new Date(): This creates a new Date object representing the current date and time.
// .getHours(): This method retrieves the hour (from 0 to 23) of the current date and time.
  const hour = new Date().getHours();
  // console.log(hour);
  const openHour = 12;
  const closeHour = 22;
  const isOpen = hour >= openHour || hour >= closeHour;
  console.log(isOpen);
  // if(hour >= openHour || hour >= closeHour){
  //   alert("we are currently open")
  // }else{
  //   alert("we are closed")
  // }
  return (
    <div>
      

      {new Date().toLocaleDateString()}, We're currently open!</div>
    // React.createElement returns a React element that you can then render to the DOM using ReactDOM.render or include in other elements to build up your UI tree.
    // return React.createElement("footer", null, "We're currently open!");
  );
}

function Pizza() {
  return (
    <div>
      <img src="pizzas/prosciutto.jpg" alt="Pizza Prosciutto" />
      <h2>Pizza Prosciutto</h2>
      <p>Tomato, mozarella, ham, aragula, and burrata cheese</p>
    </div>
  );
}

// React v18
const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// React before 18
// ReactDOM.render(<App />, document.getElementById("root"));
