import React from 'react';
import './style.css';

export default function App() {
  console.log('hello');
  return (
    <div>
      <h3 style={{ color: 'red' }}>React practice with StackBlitz!</h3>
      <h4>Checkbox with react</h4>

      <div className="container">
        <label htmlFor="HSC">HSC</label>
        <input type="checkbox" id="HSC" value="HSC" />
        <br />
        <label htmlFor="SSC">SSC</label>
        <input type="checkbox" id="SSC" value="SSC" />
        <br />

        <label htmlFor="JSC">JSC</label>
        <input type="checkbox" id="JSC" value="JSC" />
      </div>
    </div>
  );
}
