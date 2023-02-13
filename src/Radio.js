import React from 'react';

export default function Radio({ name }) {
  return (
    <>
      <label htmlFor={name}>{name}</label>
      <input type="radio" id={name} value={name} name="gender" />
    </>
  );
}
