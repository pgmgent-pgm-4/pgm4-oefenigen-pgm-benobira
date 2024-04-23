import React from 'react'
import { MenuItem, Select } from '@mui/material';

export default function SelectCountry({ countries, setCountry, country }) {
  const handleChange = (event) => {
    setCountry(event.target.value);
  }
  return (
    <Select value={country} onChange={handleChange}>
      {countries.map((country, index) => 
        <MenuItem key={`contry-${index}`} value={country.value}>
          {country.name}
        </MenuItem>)}
    </Select>
  )
}
