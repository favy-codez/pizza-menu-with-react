## Some programming concepts I learnt in the course of this project
 1. **Short-circuiting:** This is a concept in programming where an expression stops being evaluated as soon as its outcome can be determined. In JavaScript, for example, && and || operators perform short-circuit evaluation. In React, you might use short-circuiting to conditionally render parts of your JSX based on certain conditions. For example:
 ```
 
const Footer = () => {
const hour = new Date().getHours();
const openHour = 10;
const closeHour = 22;
const isOpen = hour >= openHour && hour <= closeHour

  return (
    <div>
      {isOpen && <p>We are open!</p>}
    </div>
  );
};
```