import React from 'react';

export default function Checkbox({ text }) {
  return (
    <>
      <input type="checkbox" id="checkfor" />{' '}
      <label htmlFor="checkfor">{text}</label>
    </>
  );
}
