import React, { useState } from 'react'
import './CurrencyConverter.css';

const CurrencyConverter = () => {
  const [amount, setAmount] = useState(0);
  const [convertAmount, setConvertAmount] = useState(null);

  const handleSubmit = (e) =>{
    e.preventDefault();
    const newAmt = amount * 101.01; // Assuming 1 Euro = 90 Rupees
    setConvertAmount(newAmt);
  }

  return (
    <div>
      <h1>Currency Converter</h1>
      <form>
        <div>
          <label>Amount: </label>
          <input type='number' value={amount} onChange={(e)=>{setAmount(e.target.value); setConvertAmount(null)}} />
        </div>
        <div>
          <label>Currency: </label>
          <input type='text' />
        </div>
        <button onClick={handleSubmit}>Submit</button>
        {convertAmount != null && 
        <div>
          Converted Amount: {convertAmount} Rupee
        </div>}
      </form>
    </div>
  )
}

export default CurrencyConverter