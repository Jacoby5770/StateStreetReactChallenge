import React from 'react'
import { accountConfig } from '../config'

export const AccountCategory = props => {
    const { handleAccountClick } = props
    return (
        <div className="filter-container">
            <h4>Account Name</h4>
            {
                accountConfig.map(account => (
                <div key={account}>
                    <input 
                        className="options-wrapper"
                        type="checkbox" 
                        name={account}
                        value={account} 
                        onClick={handleAccountClick}/>
                    <label>{account}</label>
                </div>
            ))}
        </div>
    )
}


