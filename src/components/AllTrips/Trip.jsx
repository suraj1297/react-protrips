import React from 'react'

export default function Trip(props) {
    return (
        <tr>
            <td>{props.date}</td>
            <td>{props.place}</td>
            <td>{props.type}</td>
        </tr>
    )
}
