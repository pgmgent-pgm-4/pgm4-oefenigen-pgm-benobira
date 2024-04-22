import React from 'react'

export default function Author({name, picture}) {
  return (
    <div>
        <h3>{name}</h3>
        <img src={picture} alt={name} />
    </div>
  )
}
