import React from 'react'
import { Link } from 'react-router-dom'
import {ROUTES} from '../routes/routes';

export default function Student({ student }) {
  return (
    <li>
      <Link to={`${ROUTES.students.path}/${student.id}`}>
          <img src={student.picture.medium} alt={`${student.firstName}_${student.lastName}`} />
          <h3>{student.firstName} {student.lastName}</h3>
      </Link>
    </li>
  )
}
