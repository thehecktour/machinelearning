import React, { useState } from 'react';
import './App.css';

function App() {

  const [bill, setBill] = useState('');
  const [tip, setTip] = useState('');
  const [result, setResult] = useState('');

  const calculate = () => {
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
    <div className='App'>
      <h1>Tip Calculator</h1>
      <h2>Whats your bill?</h2>
      <input
        value={bill}
        onChange={(e)=> setBill(e.target.value)}
        placeholder='Your bill vale'
      />
      <h2>Whats your tip?</h2>
      <input
        value={tip}
        onChange={(e)=> setTip(e.target.value)}
        placeholder='Your tip value'
      />
      <button onClick={calculate}>Calculate</button>
      <h3>Your tip is ${result} dollars</h3>
    </div>
  );
}

export default App;
