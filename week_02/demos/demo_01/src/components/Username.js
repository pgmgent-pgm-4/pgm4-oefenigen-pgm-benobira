import React, {useState} from 'react'

export default function Username() {
    const [name, setName] = useState('');
    const handleChange = (event) => { setName(event.target.value) }
  return (
    <div>
        <div>{name}</div>
        <label htmlFor='username'>Username:</label>
        <input id='username' type="text" value={name} onChange={handleChange} />
    </div>
  )
}
