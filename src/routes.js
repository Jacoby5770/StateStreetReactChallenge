import React, { Component } from 'react'
import { connect } from 'react-redux'
import { withRouter, Route, Switch } from 'react-router-dom'
import { data } from './config'
import {
    Home,
    Profile
} from './components'
import { getTransactions } from './redux/actions'

class Routes extends Component {
  componentDidMount() {
    this.props.loadInitialData()
  }

  render() {
    return (
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/profile/:transactionId" component={Profile} />
      </Switch>
    )
  }
}

const mapDispatch = dispatch => {
  return {
    loadInitialData() {
      dispatch(getTransactions(data))
    }
  }
}

export default withRouter(connect(null, mapDispatch)(Routes))
