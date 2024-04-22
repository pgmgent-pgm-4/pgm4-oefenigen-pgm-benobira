import React, { useState } from 'react'

export default function MessagToggle({ message }) {
    const [showMessage, setShowMessage] = useState(false);
    const handleClick = () => setShowMessage((prevShowMessage) => !prevShowMessage);
  return (
    <div>
        <button onClick={handleClick}>Show/hide message</button>
        {showMessage && <p>{message}</p>}
    </div>
  )
}
