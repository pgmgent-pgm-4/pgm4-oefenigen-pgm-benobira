import React from 'react'

export default function Person({firstName, lastName, pictureUrl, age, height, weight, bmi}) {
  return (
    <div>
      <h1>{firstName} {lastName}</h1>
      <img src={pictureUrl} alt={`${firstName} ${lastName}`} />
      <p>Age: {age}</p>
      <p>Height: {height}</p>
      <p>Weight: {weight}</p>
      <p>BMI: {bmi}</p>
    </div>
  )
}
