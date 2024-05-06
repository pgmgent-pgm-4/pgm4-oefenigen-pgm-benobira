import React from 'react'
import StudentList from '../components/StudentList'
import allStudents from '../data/students.js'

export default function Students() {
  const [students, setStudents] = React.useState([allStudents]);
  const [filteredStudents, setFilteredStudents] = React.useState([allStudents]);
  const [inputSearch, setInputSearch] = React.useState('');
  return (
    <StudentList />
  )
}
