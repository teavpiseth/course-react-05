import { useState } from "react";
import { useImmer } from "use-immer";
import ProgressComponent from "../state-as-snapshot/Progress";

const initPerson = {
  firstName: "",
  lastName: "",
  email: "",
  age: 20,
};
export default function UpdateStateArray() {
  const [person, setPerson] = useState(initPerson);
  const [edit, setEdit] = useState({ status: false, id: 0 });

  const [students, setStudents] = useState([
    {
      firstName: "sin ",
      lastName: "sarak",
      email: "sarak@g.com",
      age: 20,
    },
    {
      firstName: "sithul",
      lastName: "sot",
      email: "sithul@g.com",
      age: 20,
    },
  ]);

  function handleFirstNameChange(e) {
    setPerson({
      ...person,
      firstName: e.target.value,
      detail: {},
    });
  }

  function handleLastNameChange(e) {
    setPerson({
      ...person,
      lastName: e.target.value,
    });
  }

  function handleEmailChange(e) {
    setPerson({
      ...person,
      email: e.target.value,
    });
  }

  return (
    <>
      {/* <ProgressComponent/> */}
      <label>
        First name:
        <input value={person.firstName} onChange={handleFirstNameChange} />
      </label>
      <br />
      <label>
        Last name:
        <input value={person.lastName} onChange={handleLastNameChange} />
      </label>
      <br />
      <label>
        Email:
        <input value={person.email} onChange={handleEmailChange} />
      </label>
      <br />
      <button
        onClick={() => {
          if (!person.firstName || !person.email || !person.lastName) {
            return;
          } else {
            if (edit.status) {
              const newData = [...students];
              newData[edit.id] = person;
              setPerson(initPerson);
              setEdit({ status: false, id: 0 });
              return setStudents([...newData]);
            }
            setStudents([...students, person]);
            setPerson(initPerson);
          }
        }}
      >
        {" "}
        {edit.status ? "Edit" : "Add"}
      </button>
      <br />
      <br />
      <br />
      <br />
      <hr />
      {/* <label>
        Age:
        <input
          value={person.age}
          
        />
      </label> */}

      {students?.map((student, index) => (
        <>
          {" "}
          <p key={student.email}>
            First name: {student.firstName} <br />
            Last Name:{student.lastName} <br />
            Email:({student.email})<br />
            age: {student.age}
          </p>
          <button
            onClick={() =>
              setStudents(students.filter((s) => s.email !== student.email))
            }
          >
            Delete
          </button>
          <button
            onClick={() => {
              setPerson(student);
              setEdit({ status: true, id: index });
            }}
          >
            Edit
          </button>
          <br />
          <hr />
        </>
      ))}
    </>
  );
}
