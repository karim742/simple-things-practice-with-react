import React from 'react';
import './style.css';

export default class App extends React.Component {
  state = {
    checkboxChacked: [],
  };

  submit = (e) => {
    this.setState({
      [e.target.name]: e.target.checked,
    });
  };

  render() {
    return (
      <>
        <div>
          <h3 style={{ color: 'red' }}>React practice with StackBlitz!</h3>
          <h4>Checkbox with react</h4>

          <div className="container">
            <label htmlFor="HSC">HSC</label>
            <input
              type="checkbox"
              id="HSC"
              value="HSC"
              name="HSC"
              onChange={this.submit}
            />
            <br />
            <label htmlFor="SSC">SSC</label>
            <input
              type="checkbox"
              id="SSC"
              value="SSC"
              name="SSC"
              onChange={this.submit}
            />
            <br />

            <label htmlFor="JSC">JSC</label>
            <input
              type="checkbox"
              id="JSC"
              value="JSC"
              name="JSC"
              onChange={this.submit}
            />
          </div>
          <br />
        </div>
      </>
    );
  }
}
