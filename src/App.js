import React from 'react';
import './style.css';

export default function App() {
  const handleInput = (e) => {
    console.log(e.target.value);
  };
  return (
    <div>
      <h3 style={{ color: 'red' }}>React practice with StackBlitz!</h3>
      <h4>Checkbox with react</h4>

      <div className="container">
        <label htmlFor="HSC">HSC</label>
        <input type="checkbox" id="HSC" value="HSC" onChange={handleInput} />
        <br />
        <label htmlFor="SSC">SSC</label>
        <input type="checkbox" id="SSC" value="SSC" onChange={handleInput} />
        <br />

        <label htmlFor="JSC">JSC</label>
        <input type="checkbox" id="JSC" value="JSC" onChange={handleInput} />
      </div>
    </div>
  );
}
