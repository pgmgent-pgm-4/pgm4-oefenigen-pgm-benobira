import React from 'react'
import Course from './Course'

export default function Student({firstName, lastName, genderCode, birthdate, courses}) {
  return (
    <div>
        <div>Student Information</div>
        <div>Firstname: {firstName}</div>
        <div>Lastname: {lastName}</div>
        <div>Gender: {genderCode}</div>
        <div>Birthdate: {birthdate}</div>
        <ul>
            <p>Courses</p>
            {courses.map((course, index) => {
                return <li><Course key={index} name={course.name} lecturers={course.lecturers} /></li>
            })}
        </ul>
    </div>
  )
}
