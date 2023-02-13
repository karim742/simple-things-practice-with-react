import React from 'react';

export default function Inputbox({ label, type, placeholder }) {
  return (
    <>
      <div>
        <label htmlFor={label}>{label}</label>
        <input type={type} placeholder={placeholder} name={label} />
      </div>
    </>
  );
}
