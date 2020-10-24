import React, { Component } from 'react'
import Home from './components/Home/Home'
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom"
import Navbar from './components/Navbar/Navbar'
import AddTrip from './components/NewTrip/AddTrip'
import AllTrips from './components/AllTrips/AllTrips'


export default class App extends Component {

  constructor() {
    super()
    this.state = {
      trip: [{ place: "Bali", date: "2020-11-10", type: "Club" },
      { place: "Manali", date: "2021-05-15", type: "Trek" },
      { place: "Amazon", date: "2021-07-01", type: "Tropic" },
      { place: "Bali", date: "2021-10-25", type: "Trek" }]
    }
  }

  newTrip = (e) => {
    e.preventDefault()
    alert("Added Trip Successfully")
    this.setState(prevState => {
      return {
        trip: [
          ...prevState.trip,
          {
            place: e.target.place.value,
            date: e.target.date.value,
            type: e.target.type.value
          }
        ]
      }
    })
  }

  render() {
    return (
      <Router>
        <Navbar />

        <Switch>
          <Route exact path="/">
            <Home trips={this.state.trip} />
          </Route>
          <Route path="/addTrip">
            <AddTrip addTrip={this.newTrip} />
          </Route>
          <Route path="/allTrips">
            <AllTrips trips={this.state.trip} />
          </Route>
        </Switch>
      </Router>
    )
  }
}
