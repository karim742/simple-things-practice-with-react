import React from 'react';

export default function Inputbox({ label, type, placeholder, id }) {
  return (
    <>
      <div>
        <label htmlFor={label}>{label}</label>
        <input type={type} placeholder={placeholder} name={label} id={label} />
      </div>
    </>
  );
}
