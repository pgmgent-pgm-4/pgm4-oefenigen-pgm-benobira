import React from 'react'
import Student from './Student'

export default function StudentList({students}) {
  return (
    <>
        <h2>List of all the students</h2>
        <ul>
        {students.map(student => {
            return <Student key={student.id} student={student} />
        })}
        </ul>
    </>
  )
}
