import React from 'react'
import { transactionConfig } from '../config'

export const TransactionCategory = props => {
    const { handleTransactionClick } = props
    return (
        <div className="filter-container">
            <h4>Transaction Type</h4>
            {
                transactionConfig.map(transaction => (
                    <div key={transaction}>
                        <input
                            className="options-wrapper"
                            type="checkbox"
                            name={transaction}
                            value={transaction}
                            onClick={handleTransactionClick}
                        />
                        <label>{transaction}</label>
                    </div>
                ))
            }
        </div>
    )
}
