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