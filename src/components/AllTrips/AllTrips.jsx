import React from 'react'
import Trip from './Trip'
import "./AllTrips.css"

export default function AllTrips(props) {
    return (
        <div className="all-trips">
            <h1>All Trips</h1>
            <table>
                <thead>
                    <tr>
                        <td>Date</td>
                        <td>Place</td>
                        <td>Type</td>
                    </tr>
                </thead>
                <tbody>
                    {props.trips.map((trip, index) => <Trip key={index} {...trip} />)}
                </tbody>
            </table>
        </div>
    )
}
