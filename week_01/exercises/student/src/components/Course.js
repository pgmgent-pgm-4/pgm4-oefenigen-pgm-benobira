import React from 'react'

export default function Course({name, lecturers}) {
  return (
    <div>
        <div>Name: {name}</div>
        <div>Lecturers: {lecturers.map((lecturer, index) => {
                return <div key={index}>- {lecturer}</div>
            }
        )}</div>
    </div>
  )
}
