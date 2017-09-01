import React from 'react';
import Amortization from './amortization'

class Calculator extends React.Component{
    constructor(props) {
      super();
      this.state = {
        loan: props.loan,
        months: props.months,
        rate: props.rate
      };
  }

    render() {
        var payment = calculatePayment(this.state.loan, this.state.months, this.state.rate);
        var monthlyPayment = payment.monthlyPayment;
        var amortization = payment.amortization;
        return (
            <div className="content">
                <div className="form">
                    <div>
                        <label>Loan Amount:</label>
                        <input type="text" value={this.state.loan} onChange={(event) => this.setState({loan: event.target.value})}/>
                    </div>
                    <div>
                        <label>Months:</label>
                        <input type="text" value={this.state.months} onChange={(event) => this.setState({months: event.target.value})}/>
                    </div>
                    <div>
                        <label>Interest Rate:</label>
                        <input type="text" value={this.state.rate} onChange={(event) => this.setState({rate: event.target.value})}/>
                    </div>
                </div>
                <h2>Monthly Payment: <span className="currency">{Number(monthlyPayment.toFixed(2)).toString()}</span></h2>
                <Amortization values={amortization}/>
            </div>
        );
    }
}

var calculatePayment = function(loan, months, rate) {
    var monthlyRate = rate / 100 / 12;
    var monthlyPayment = loan * monthlyRate / (1 - (Math.pow(1/(1 + monthlyRate), months)));
    var balance = loan;
    var amortization = [];
    var interestY = 0; 
    var loanY = 0;
    for (var m=0; m<months; m++) {
        var interestM = balance * monthlyRate;
        var loanM = monthlyPayment - interestM;
        interestY = interestY + interestM;
        loanY = loanY + loanM;
        balance = balance - loanM;
        amortization.push({loanY: loanY, interestY: interestY, balance: balance});
    }
    return {monthlyPayment: monthlyPayment, amortization:amortization};
};

export default Calculator;