import React from 'react'
import "./Home.css"
import mountain from "./mountain.png"


export default function Home(props) {

    let { tropical, trek, club } = calculateTrips(props.trips)

    return (
        <div className="home" >
            <p><span>{tropical + trek + club}</span> <span id="trips-span">trips</span></p>
            <div className="trips-distribution">
                <p><span>{tropical}</span> <i className="fa fa-sun-o" aria-hidden="true"></i></p>
                <p><span>{trek}</span> <img src={mountain} alt="" /></p>
                <p><span>{club}</span> <i className="fa fa-beer" aria-hidden="true"></i></p>
            </div>
        </div>
    )
}


function calculateTrips(trips) {
    let tropical = 0
    let trek = 0
    let club = 0

    trips.forEach(trip => {
        if (trip.type === "Tropic")
            tropical++
        else if (trip.type === "Trek")
            trek++
        else if (trip.type === "Club")
            club++
    })


    return { tropical: tropical, trek: trek, club: club }
}
