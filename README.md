## Some programming concepts I learnt in the course of this project

1.  **Short-circuiting:** This is a concept in programming where an expression stops being evaluated as soon as its outcome can be determined. In JavaScript, for example, && and || operators perform short-circuit evaluation. In React, you might use short-circuiting to conditionally render parts of your JSX based on certain conditions. So short circuiting means that if this condition is false or falsey,
    then the second part of the operation will not even be executed. For example:

```
const Footer = () => {
const hour = new Date().getHours();
const openHour = 12;
const closeHour = 22;
const isOpen = hour >= openHour && hour <= closeHour

 return (
   <div>
     {numPizzas > 0 && (
       <ul className="pizzas">
         {pizzas.map((pizza) => (
           <Pizza pizzaObj={pizza} key={pizza.name} />
         ))}
       </ul>
     )}
   </div>
 );
};
```

2. **new Date().toLocaleDateString() :** is used to dynamically generate the current date string using JavaScript

```
{new Date().toLocaleDateString()}, We're currently open!
```

3. In React, when rendering, true, false, null, and undefined are all ignored and won't produce any output in the DOM. However, 0 (zero) is a valid value and will be rendered. In this case, only the 0 will actually render in the DOM. The rest will not produce any visible output. This behavior is by design and can be useful for conditional rendering where true or false values might control whether a component is displayed or not.

```
const App = () => {
  return (
    <div>
      {true}
      {false}
      {null}
      {undefined}
      {0}
    </div>
  );
};

```

3. **Ternary Operator** - It's a concise way to conditionally render different elements based on a condition. The ternary operator has the following syntax:

```
{condition ? trueCase : falseCase}
```

```
{numPizzas > 0 ? (
  <ul className="pizzas">
  {pizzas.map((pizza) => (
    <Pizza pizzaObj={pizza} key={pizza.name} />
    ))}
    </ul>
    ) : <p>We are currently working on our menu, please check back later</p>}
```

4. **conditional rendering with multiple returns :** Each component can only return one block of JSX, but the return can depend on a condition.

```
function Footer() {
  const hour = new Date().getHours();
  const openHour = 12;
  const closeHour = 22;
  const isOpen = hour >= openHour && hour <= closeHour;
  console.log(isOpen);

if (!isOpen) return <p>CLOSED</p>;

  return (
    <footer className="footer">
      {isOpen ? (
        <Order closeHour={closeHour} openHour={openHour} />
      ) : (
        <p>
          We're happy to welcome you between {openHour}:00 and {closeHour}:00.
        </p>
      )}
    </footer>
  );

}
```

### OR

```
function Pizza(props){
  if (props.pizzaObj.soldOut) return <Header />;

return(
  .....
)
}
```

### OR

```
function Pizza(props){
  if (props.pizzaObj.soldOut) return null;

return(
  .....
)
}
```

5. **we can also use props to pass arguments into functions** -

```
return (
      <div className="footer">
        {isOpen ? <Order openHour={openHour} closeHour={closeHour} /> : (
          <p>
            We are currently closed, but we are happy to welcome you between the{" "}
            {openHour}:00 and {closeHour}
            :00
          </p>
        )}
    )

function Order(props){

  return (
    <div className="order">
      <p>We are open until {props.closeHour}:00, Visit us or order online !</p>
    </div>
  );
}
```

6. **destructuring props** - Destructuring props is a convenient way to extract specific properties from the props object passed to a component.

```
return(
  <main className="menu">
      <h2>Our Menu</h2>

      {numPizzas > 0 ? (
        <ul className="pizzas">

          {pizzas.map((pizza) => (
            <Pizza pizzaObj={pizza} key={pizza.name} />
          ))}
        </ul>
      ) : (
        <p>We are currently working on our menu, please check back later</p>
      )}
    </main>
)

function Pizza({pizzaObj}) {
  // console.log(props)

  if (pizzaObj.soldOut) return null;
  return (
    <li className="pizza">
      <img src={pizzaObj.photoName} alt={pizzaObj.name} />
      <div>
        <h3>{pizzaObj.name}</h3>
        <p>{pizzaObj.ingredients}</p>
        <span>{pizzaObj.price}</span>
      </div>
    </li>
  );
}
```

we can also pass in other props

```
function Footer() {
  const hour = new Date().getHours();
  // console.log(hour);
  const openHour = 2;
  const closeHour = 22;
  const isOpen = hour >= openHour || hour >= closeHour;
  console.log(isOpen);

  if (!isOpen) return <p>wE ARE CLOSED!!!</p>;
    return (
      <div className="footer">
        {isOpen ? <Order openHour={openHour} closeHour={closeHour} /> : (
          <p>
            We are currently closed, but we are happy to welcome you between the{" "}
            {openHour}:00 and {closeHour}
            :00
          </p>
        )}
      </div>
    );
}

function Order({closeHour, openHour, test}) {
  return (
    <div className="order">
      <p>We are open from {openHour} until {closeHour}:00, Visit us or order online !</p>
      <button className="btn">Order</button>
    </div>
  );
}
```

if we try to destructure a property that doesn't exist, it simply returns undefined. example: test doesn't exist, so its undefined.

7. **React Fragment** - React Fragments provide a way to group multiple children elements without adding extra nodes to the DOM. They are useful when you want to return multiple elements from a component's render method but don't want to wrap them in an additional container element. <> and </> are shorthand syntax for React Fragments. They allow you to return multiple elements without adding a wrapper <div> or any other element to the DOM. This is particularly useful when you want to maintain a clean and semantic HTML structure while rendering multiple elements. Here's how you can use React Fragments:

```
      {numPizzas > 0 ? (
        <>
          <p>
            Authentic Italian cuisine. 6 creative dishes to choose from. All
            from our stone oven, all organic, all delicious.
          </p>
          <ul className="pizzas">

            {pizzas.map((pizza) => (
              <Pizza pizzaObj={pizza} key={pizza.name} />
            ))}


          </ul>
        </>
      ) : (
        <p>We are currently working on our menu, please check back later</p>
      )}

### OR


  {numPizzas > 0 ? (
        <React.Fragment>
          <p>
            Authentic Italian cuisine. 6 creative dishes to choose from. All
            from our stone oven, all organic, all delicious.
          </p>
          <ul className="pizzas">

            {pizzas.map((pizza) => (
              <Pizza pizzaObj={pizza} key={pizza.name} />
            ))}


          </ul>
        </React.Fragment>
      ) : (
        <p>We are currently working on our menu, please check back later</p>
      )}

```

React Fragments can also accept keys and attributes, just like regular HTML elements. They're especially handy when you're mapping over arrays and generating lists of elements, as they allow you to avoid unnecessary wrapper elements around each item in the list.

```
import React from "react";
const MyList = ({ items }) => {
  return (
    <>
      {items.map((item, index) => (
        <React.Fragment key={index}>
          <p>{item}</p>
          <hr />
        </React.Fragment>
      ))}
    </>
  );
};
```

8. **Setting classes and text conditionally:** 
```
function Pizza({ pizzaObj }) {

  return (
    <li className={`pizza ${pizzaObj.soldOut ? "sold-out" : ""}`}>
      <img src={pizzaObj.photoName} alt={pizzaObj.name} />
      <div>
        <h3>{pizzaObj.name}</h3>
        <p>{pizzaObj.ingredients}</p>
        <span>{pizzaObj.soldOut ? "SOLD OUT" : pizzaObj.price}</span>
      </div>
    </li>
  );
}
```

```
function Pizza({ pizzaObj }) {

  // if (pizzaObj.soldOut) return null;

  return (
    <li className="pizza">
      <img src={pizzaObj.photoName} alt={pizzaObj.name} />
      <div>
        <h3>{pizzaObj.name}</h3>
        <p>{pizzaObj.ingredients}</p>
        <span>{pizzaObj.soldOut ? "SOLDOUT" : pizzaObj.price}</span>
      </div>
    </li>
  );
}
```
### OR
```
function Pizza({ pizzaObj }) {

  // if (pizzaObj.soldOut) return null;

  return (
    <li className="pizza">
      <img src={pizzaObj.photoName} alt={pizzaObj.name} />
      <div>
        <h3>{pizzaObj.name}</h3>
        <p>{pizzaObj.ingredients}</p>
        {pizzaObj.soldOut ? <span>SOLD OUT</span> : <span>{pizzaObj.price}</span>}
      </div>
    </li>
  );
}
```

9. **How to add styling to JSX:** 

```
function Header() {
  const style = { color: "red", fontSize: "48px", textTransform: "uppercase" };

  return (
    <header className="header">
      <h1 style={style}>Fast React Pizza Co.</h1>
    </header>
  );
}

```

### OR

```
function Header() {

  return (
    <header className="header">
      <h1
        style={{ color: "red", fontSize: "48px", textTransform: "uppercase" }}
      >
        Fast React Pizza Co.
      </h1>
    </header>
  );
}

```