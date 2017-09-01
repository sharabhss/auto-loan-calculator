import React from 'react';
import Amortization from './amortization'

class Calculator extends React.Component{
    // initialize the states for the props
    constructor(props) {
      super(props);
      this.state = {
        loan: props.loan,
        months: props.months,
        rate: props.rate
      };
    }
    // this class renders the input forms and the calls the Amortization class for the data table
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

// monthly payment and amortization values calculation function. All the math is done here
var calculatePayment = function(loan, months, rate) {
    if (loan == null || months == null || rate == null) {
        return {monthlyPayment: 0, amortization:[]};
    }
    else {
        var monthlyRate = rate / 100 / 12;
        var monthlyPayment = loan * monthlyRate / (1 - (Math.pow(1/(1 + monthlyRate), months)));
        var balance = loan;
        var amortization = [];
        var interestX = 0; 
        var loanX = 0;
        for (var m=0; m<months; m++) {
            var interestY = balance * monthlyRate;
            var loanM = monthlyPayment - interestY;
            interestX = interestX + interestY;
            loanX = loanX + loanM;
            balance = balance - loanM;
            amortization.push({loanX: loanX, interestX: interestX, balance: balance});
        }
        return {monthlyPayment: monthlyPayment, amortization:amortization};
    }
};

export default Calculator;