import React from 'react';
import Input from './Inputbox';

export default function Form() {
  return (
    <>
      <form action="#">
        <Input label="Name" type="text" placeholder="name" /> <br />
        <Input label="Email" type="email" placeholder="email" /> <br />
        <Input label="Password" type="password" placeholder="password" /> <br />
        <Input
          label="Confirm-Password"
          type="password"
          placeholder="confirm-password"
        />{' '}
        <br />
      </form>
    </>
  );
}
