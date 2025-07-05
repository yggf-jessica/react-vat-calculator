import { useState } from 'react';
import './App.css';

function App() {
  const [price, setPrice] = useState(100);
  const [discount, setDiscount] = useState(10);

  const gross = price - discount;
  const vat = gross * 0.07;

  return (
    <div className="container">
      <h2>VAT Calculator</h2>
      <label>Price
        <input type="number" value={price} onChange={(e) => setPrice(+e.target.value)} />
      </label>
      <label>Discount
        <input type="number" value={discount} onChange={(e) => setDiscount(+e.target.value)} />
      </label>
      <div className="result">
        <p>Gross Price = {gross}</p>
        <p>VAT = {vat.toFixed(2)}</p>
      </div>
    </div>
  );
}

export default App;