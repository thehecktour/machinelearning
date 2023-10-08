import React, { useState } from 'react';

function App() {
  
  const [bill, setBill] = useState('');
  const [tip, setTip] = useState('');
  const [result, setResult] = useState('');

  const calculate = () =>{
    const finalBill = parseFloat(bill);
    const finalTip = parseFloat(tip);
    const finalResult = (finalBill*(finalTip/100));

    if(!isNaN(finalBill) && !isNaN(finalTip)){
      setResult(finalResult.toFixed(2));
    }else{
      setResult('0');
    }
  }

  return (
    <div className="App">
      <h1>Tip Calculator</h1>
      <h2>Enter the bill amount and tip percentage to calculate the total.</h2>
      <p>Bill amount: </p>
      <input
        value={bill}
        onChange={(finalValue)=> setBill(finalValue.target.value)}
        placeholder='Whats your bill amount?'
      />
      <p>Tip percentage:</p>
      <input
        value={tip}
        onChange={(finalValue)=> setTip(finalValue.target.value)}
        placeholder='Whats your tip percentage?'
      />
      <button onClick={calculate}>Calculate</button>
      <h3>Total: {result}</h3>
    </div>
  );
}

export default App;
