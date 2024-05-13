import React from "react";
import "./index.css";
import ReactDOM from "react-dom/client";
// React before 18 that is react 17
// import ReactDOM from "react-dom";

const pizzaData = [
  {
    name: "Focaccia",
    ingredients: "Bread with italian olive oil and rosemary",
    price: 6,
    photoName: "pizzas/focaccia.jpg",
    soldOut: false,
  },
  {
    name: "Pizza Margherita",
    ingredients: "Tomato and mozarella",
    price: 10,
    photoName: "pizzas/margherita.jpg",
    soldOut: false,
  },
  {
    name: "Pizza Spinaci",
    ingredients: "Tomato, mozarella, spinach, and ricotta cheese",
    price: 12,
    photoName: "pizzas/spinaci.jpg",
    soldOut: false,
  },
  {
    name: "Pizza Funghi",
    ingredients: "Tomato, mozarella, mushrooms, and onion",
    price: 12,
    photoName: "pizzas/funghi.jpg",
    soldOut: false,
  },
  {
    name: "Pizza Salamino",
    ingredients: "Tomato, mozarella, and pepperoni",
    price: 15,
    photoName: "pizzas/salamino.jpg",
    soldOut: true,
  },
  {
    name: "Pizza Prosciutto",
    ingredients: "Tomato, mozarella, ham, aragula, and burrata cheese",
    price: 18,
    photoName: "pizzas/prosciutto.jpg",
    soldOut: false,
  },
];

function App() {
  return (
    <div className="container">
      <Header />
      <Menu />
      <Footer />
    </div>
  );
}

function Header() {
  const style = { color: "red", fontSize: "48px", textTransform: "uppercase" };

  return (
    <header className="header">
      <h1 style={style}>Fast React Pizza Co.</h1>
      {/* <h1
        style={{ color: "red", fontSize: "48px", textTransform: "uppercase" }}
      >
        Fast React Pizza Co.
      </h1> */}
    </header>
  );
}

function Menu() {
  // const pizzas = [];
  const pizzas = pizzaData;
  const numPizzas = pizzas.length;

  return (
    <main className="menu">
      <h2>Our Menu</h2>

      {/* numPizzas > 0 will return a truty or falsy value, */}
      {numPizzas > 0 ? (
        <ul className="pizzas">
          {/* This is the callback function provided to the map() method. It takes
        each pizza object as its argument. */}
          {/* Inside the arrow function, we have a JSX expression. It creates a{" "}
        <Pizza /> component for each pizza object in the pizzaData array. Each{" "}
        <Pizza /> component is passed two props: pizzaObj, which is set to the
        current pizza object, and key, which is set to the name property of the
        pizza object. Using the name property as the key ensures that each{" "}
        <Pizza />
        component has a unique identifier. */}

          {pizzas.map((pizza) => (
            <Pizza pizzaObj={pizza} key={pizza.name} />
          ))}

          {/* {pizzaData.map((pizza) => {
          return (
            <Pizza
              name={pizza.name}
              ingredient={pizza.ingredients}
              photoName={pizza.photoName}
            />
          );
        })} */}
        </ul>
      ) : (
        <p>We are currently working on our menu, please check back later</p>
      )}
      {/* <Pizza
        name="Pizza Prosciutto"
        ingredient="Tomato, mozarella, ham, aragula, and burrata cheese"
        photoName="pizzas/prosciutto.jpg"
        price={10}
      /> */}
    </main>
  );
}

function Footer() {
  // new Date(): This creates a new Date object representing the current date and time.
  // .getHours(): This method retrieves the hour (from 0 to 23) of the current date and time.
  const hour = new Date().getHours();
  // console.log(hour);
  const openHour = 2;
  const closeHour = 22;
  const isOpen = hour >= openHour || hour >= closeHour;
  console.log(isOpen);

  if (!isOpen) return <p>wE ARE CLOSED!!!</p>;
    // if(hour >= openHour || hour >= closeHour){
    //   alert("we are currently open")
    // }else{
    //   alert("we are closed")
    // }
    return (
      <div className="footer">
        {isOpen ? <Order openHour={openHour} closeHour={closeHour} /> : (
          <p>
            We are currently closed, but we are happy to welcome you between the{" "}
            {openHour}:00 and {closeHour}
            :00
          </p>
        )}
        {/* {new Date().toLocaleDateString()}, We're currently open! */}
      </div>
      // React.createElement returns a React element that you can then render to the DOM using ReactDOM.render or include in other elements to build up your UI tree.
      // return React.createElement("footer", null, "We're currently open!");
    );
}

function Order(props){

  return (
    <div className="order">
      <p>We are open until {props.closeHour}:00, Visit us or order online !</p>
      <button className="btn">Order</button>
    </div>
  );
}

function Pizza(props) {
  // console.log(props)

  if (props.pizzaObj.soldOut) return null;
  return (
    <li className="pizza">
      <img src={props.pizzaObj.photoName} alt={props.name} />
      <div>
        <h3>{props.pizzaObj.name}</h3>
        <p>{props.pizzaObj.ingredients}</p>
        <span>{props.pizzaObj.price}</span>
      </div>
    </li>
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
