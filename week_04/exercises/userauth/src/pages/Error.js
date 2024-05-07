import React from 'react'
import { useRouteError } from 'react-router-dom'

export default function Error() {
    const error = useRouteError();
  return (
    <>
      <h1>Error</h1>
      <p>There is an error: {error.statusText} - {error.status}</p>
    </>
  )
}
