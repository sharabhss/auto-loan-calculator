import React from 'react';

class Amortization extends React.Component{
    render() {
        var items = this.props.values.map(function (month, index) {
            return (
                <tr key={index}>
                    <td>{index + 1}</td>
                    <td className="currency loan">{Math.round(month.loanY).toString()}</td>
                    <td className="currency interest">{Math.round(month.interestY).toLocaleString()}</td>
                    <td className="currency">{Math.round(month.balance).toString()}</td>
                </tr>
            );
        });

        return (
            <table>
                <thead>
                <tr>
                    <th>Month</th>
                    <th className="loan">Amount Paid</th>
                    <th className="interest">Interest Paid</th>
                    <th>Remaining Balance</th>
                </tr>
                </thead>
                <tbody>{items}</tbody>
            </table>
        );
    }
}

export default Amortization;