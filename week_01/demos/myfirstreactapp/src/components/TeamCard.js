import React from 'react'

export default function TeamCard({jobFunction, firstName, lastName}) {
    return (
        <div>
            <h2>{jobFunction}</h2>
            <p>{firstName} {lastName}</p>
        </div>
    )
}
