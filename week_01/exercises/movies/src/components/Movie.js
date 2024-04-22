import React from 'react'

export default function Movie({ movie }) {
  return (
    <div className='card'>
        <h2>{movie.title}</h2>
        <p>{movie.synopsis}</p>
        <div>
            {movie.tags.map((tag, index) => {
                return <span key={`tag-key-${index}`}>{tag} </span>
            })}
        </div>
    </div>
  )
}
