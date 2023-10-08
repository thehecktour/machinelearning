import React from 'react';

function App() {
  return (
    <div className="App">
      <h1>Tip Calculator</h1>
      <h2>Enter the bill amount and tip percentage to calculate the total.</h2>
      <p>Bill amount: </p>
      <input/>
      <p>Tip percentage:</p>
      <input/>
      <button>Calculate</button>
      <h3>Total: </h3>
    </div>
  );
}

export default App;
