import React, { Component } from 'react'
import Start from '../pages/Start'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'

// import ReservationsPage from '../pages/Reservations'
// import Dashboard from '../pages/Dashboard'

export class App extends Component {

    render() {
        return (
            <div className="container">
                <Router>
                    <Switch>
                        {/* <Route exact path="/login" component={Login} />
                        <Route exact path="/extranet" component={Dashboard} />
                        <Route exact path="/extranet/reservations" component={ReservationsPage} /> */}
                        <Route component={Start} />
                    </Switch>
                </Router>
            </div>
        )
    }
}

export default App
