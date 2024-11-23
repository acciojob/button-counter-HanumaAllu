import React, { useState } from "react";  // Import useState from React
import './../styles/App.css';

const App = () => {
  const [count, setCount] = useState(0); // Initialize count state to 0

  const onAdd = () => {
    setCount(count + 1);  // Increment count by 1 each time the button is clicked
  };

  return (
    <div>
      {/* Do not remove the main div */}
      <p>Button clicked {count} times</p>  {/* Display the current count */}
      <div>
        <button onClick={onAdd}>Add</button>  {/* Button to trigger onAdd function */}
      </div>
    </div>
  );
};

export default App;

