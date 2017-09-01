import React from 'react';

class Amortization extends React.Component{
    // renders the data table with values from Calculator
    render() {
        var items = this.props.values.map(function (month, index) {
            return (
                <tr key={index}>
                    <td>{index + 1}</td>
                    <td className="currency">{Math.round(month.loanX).toString()}</td>
                    <td className="currency">{Math.round(month.interestX).toLocaleString()}</td>
                    <td className="currency">{Math.round(month.balance).toString()}</td>
                </tr>
            );
        });
        return (
            <table>
                <thead>
                    <tr>
                        <th>Month</th>
                        <th>Amount Paid</th>
                        <th>Interest Paid</th>
                        <th>Remaining Balance</th>
                    </tr>
                </thead>
                <tbody>{items}</tbody>
            </table>
        );
    }
}

export default Amortization;