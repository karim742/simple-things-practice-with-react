import React from 'react';
import Input from './Inputbox';

export default function Form() {
  return (
    <>
      <form action="#">
        <Input label="Name" type="text" placeholder="name" /> <br /> <br />
        <Input label="Email" type="email" placeholder="email" /> <br /> <br />
        <Input
          label="Password"
          type="password"
          placeholder="password"
        /> <br /> <br />
        <Input
          label="Confirm-Password"
          type="password"
          placeholder="confirm-password"
        />{' '}
        <br /> <br />
      </form>
    </>
  );
}
