import React from 'react'
import { Link } from 'react-router-dom'

export default function Home() {
  return (
    <div>
      <h1>Welcome to the StudentApp plaform</h1>
      <p>Click the link below to view all students</p>
      <Link to="/students">View Students</Link>
    </div>
  )
}
