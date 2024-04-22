import React from 'react'
import Movie from './Movie'

export default function MovieList({ movies }) {
  return (
    <div className='list'>
      {movies.map((movie, index) => {
        return <Movie key={`movie-key-${index}`} movie={movie} />
      })}
    </div>
  )
}
