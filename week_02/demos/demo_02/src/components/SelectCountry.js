import React from 'react'

export default function SelectCountry({ countries, setCountry, country }) {
  const handleChange = (event) => {
    setCountry(event.target.value);
  }
  return (
    <select value={country} onChange={handleChange}>
      {countries.map((country, index) => 
        <option key={`contry-${index}`} value={country.value}>
          {country.name}
        </option>)}
    </select>
  )
}
