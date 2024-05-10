// In JSX, only expressions are allowed, not statements. JSX is essentially a syntactic sugar for JavaScript,
//  so anything that can be represented as an expression is valid within JSX. Statements, on the other hand, 
//  involve control flow and do not directly produce a value, which goes against the nature of JSX. If you 
//  have a statement that you need to execute, you should do it outside of the JSX expression, before 
//  rendering. For example, instead 
// Incorrect: Statement inside JSX

// return (
//   <div>
//     {if (condition) {
//       <p>Condition is true</p>;
//     }}
//   </div>
// );

// Correct: Expression inside JSX
// return (
//   <div>
//     {condition ? <p>Condition is true</p> : null}
//   </div>
// );

// Or handle the logic outside the JSX:

// Correct: Logic outside JSX
// let content = null;
// if (condition) {
//   content = <p>Condition is true</p>;
// }
// return (
//   <div>
//     {content}
//   </div>
// );


// SX allows JavaScript expressions to be placed inside curly braces {}. This allows you to embed dynamic 
// content, variables, function calls, and even conditional expressions directly within your JSX code. 
// Here's an example:

import React from 'react';

const MyComponent = ({ name, age }) => {
  const greeting = `Hello, ${name}!`;
  const isAdult = age >= 18;

  return (
    <div>
      <p>{greeting}</p>
      <p>{isAdult ? 'You are an adult' : 'You are not yet an adult'}</p>
    </div>
  );
};

export default MyComponent;
