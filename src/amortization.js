import React from 'react';

class Amortization extends React.Component{
    render() {
        var items = this.props.data.map(function (year, index) {
            return (
                <tr key={index}>
                    <td>{index + 1}</td>
                    <td className="currency loan">{Math.round(year.loanY).toLocaleString()}</td>
                    <td className="currency interest">{Math.round(year.interestY).toLocaleString()}</td>
                    <td className="currency">{Math.round(year.balance).toLocaleString()}</td>
                </tr>
            );
        });

        return (
            <table>
                <thead>
                <tr>
                    <th>Month</th>
                    <th className="loan">Amount</th>
                    <th className="interest">Interest</th>
                    <th>Remaining</th>
                </tr>
                </thead>
                <tbody>{items}</tbody>
            </table>
        );
    }
}

export default Amortization;