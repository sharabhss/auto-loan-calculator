import React from 'react';
import './app.css';
import Calculator from './calculator'

class App extends React.Component {
  render() {
    return (
      <div>
        <header>
          <h1>Auto Loan Calculator</h1>
        </header>
        <Calculator loan="30000" months="60" rate="3.7"/>
      </div>
    );
  }
}

export default App;
