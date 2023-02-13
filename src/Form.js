import React from 'react';
import Input from './Inputbox';

export default function Form() {
  return (
    <>
      <form action="#">
        <Input label="Name: " type="text" placeholder="name" />
      </form>
    </>
  );
}
