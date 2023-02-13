import React from 'react';
import './style.css';

import Form from './Form';

export default class App extends React.Component {
  render() {
    return (
      <>
        <div className="signup">
          <h2>SIGN UP</h2>
        </div>
        <Form />
      </>
    );
  }
}
