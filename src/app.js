import React from 'react';
import './app.css';
import Calculator from './calculator'

class App extends React.Component {
  // renders the page title and calls Calculator with default props values
  render() {
    return (
      <div>
        <header>
          <h1>Loan Calculator / Amortization Schedule</h1>
        </header>
        <Calculator />
      </div>
    );
  }
}

export default App;

// <Calculator loan="30000" months="60" rate="3.7"/>