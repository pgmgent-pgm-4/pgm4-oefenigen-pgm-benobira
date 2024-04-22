import './App.css';
import Student from './components/Student';

function App() {
  const students = [
    {
      firstName: "John",
      lastName: "Doe",
      genderCode: 1,
      birthdate: 982623600000,
      courses: [
        {
          name: "Math",
          lecturers: ["Mr. Smith", "Ms. Johnson"]
        },
        {
          name: "Science",
          lecturers: ["Mr. Brown", "Ms. Davis"]
        }
      ]
    },
    {
      firstName: "Jane",
      lastName: "Smith",
      genderCode: 2,
      birthdate: 978407200000,
      courses: [
        {
          name: "History",
          lecturers: ["Mr. Smith", "Ms. Johnson"]
        },
        {
          name: "Geography",
          lecturers: ["Mr. Brown", "Ms. Davis"]
        }
      ]
    },
    {
      firstName: "Jackie",
      lastName: "Brown",
      genderCode: 0,
      birthdate: 964214400000,
      courses: [
        {
          name: "Programming",
          lecturers: ["Mr. Smith", "Ms. Johnson"]
        },
        {
          name: "Data Structures",
          lecturers: ["Mr. Brown", "Ms. Davis"]
        }
      ]
    }
  ]

  // change gendercode to correct gender
  students.forEach(student => {
    if (student.genderCode === 1) {
      student.gender = "Male";
    } else if (student.genderCode === 2) {
      student.gender = "Female";
    } else {
      student.gender = "Other";
    }
  });

  // birthdate to be displayed in the format: "MM/DD/YYYY"
  students.forEach(student => {
    const date = new Date(student.birthdate);
    student.birthdate = `${date.getDate()}/${date.getMonth() + 1}/${date.getFullYear()}`;
  });

  return (
    <div className="students">
      <h1>Students</h1>
      {students.map((student, index) => {
        return <Student key={index}firstName={student.firstName} lastName={student.lastName} genderCode={student.gender} birthdate={student.birthdate} courses={student.courses} />
      })}
    </div>
  );
}

export default App;
