### some programming concepts I learnt in the course fo this project
Short-circuiting: This is a concept in programming where an expression stops being evaluated as soon as its outcome can be determined. In JavaScript, for example, && and || operators perform short-circuit evaluation. In React, you might use short-circuiting to conditionally render parts of your JSX based on certain conditions. For example:
const App = ({ isLoggedIn }) => {
  return (
    <div>
      {isLoggedIn && <p>Welcome back!</p>}
    </div>
  );
};
