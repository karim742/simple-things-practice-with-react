import React from 'react';
import Input from './Inputbox';
import Radio from './Radio';
import Checkbox from './Checkbox';

export default class Form extends React.Component {
  render() {
    return (
      <>
        <form action="#">
          <Input label="Name: " type="text" placeholder="name" /> <br />
          <Input label="Email: " type="email" placeholder="email" /> <br />
          <Input
            label="Password: "
            type="password"
            placeholder="password"
          />{' '}
          <br />
          <Input
            label="Confirm-Password: "
            type="password"
            placeholder="confirm-password"
          />
          <br />
          <Radio name="Male" />
          <Radio name="Female" />
          <br />
          <br />
          <Checkbox text="I agree all tarms & condition" />
          <br />
          <br />
          <button
            type="button"
            value="Submit"
            onClick={() => console.log('hello')}
          >
            Submit
          </button>
        </form>
      </>
    );
  }
}
