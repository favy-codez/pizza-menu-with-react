## Some programming concepts I learnt in the course of this project
 1. **Short-circuiting:** This is a concept in programming where an expression stops being evaluated as soon as its outcome can be determined. In JavaScript, for example, && and || operators perform short-circuit evaluation. In React, you might use short-circuiting to conditionally render parts of your JSX based on certain conditions. So short circuiting means that if this condition is false or falsey,
then the second part of the operation will not even be executed. For example:
 
 ```
const Footer = () => {
const hour = new Date().getHours();
const openHour = 12;
const closeHour = 22;
const isOpen = hour >= openHour && hour <= closeHour

  return (
    <div>
      {isOpen && <p>We are open until {closeHour}:00, Visit us or order online !</p>}
    </div>
  );
};
```
2. **new Date().toLocaleDateString() :** is used to dynamically generate the current date string using JavaScript

```
{new Date().toLocaleDateString()}, We're currently open!
```