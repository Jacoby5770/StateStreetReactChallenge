import React from 'react'
import '../scss/main.scss'
import { Categories } from '../components'

export const Home = props => {
    return (
        <div className="container">
            <div className="content-area">
                <header>
                    <h1>My Transactions</h1>
                </header>
                <hr/>
                <Categories />
            </div>
        </div>
    )
}



