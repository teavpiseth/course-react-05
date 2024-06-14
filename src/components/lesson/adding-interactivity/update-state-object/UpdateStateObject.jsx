import { useState } from "react";
import { useImmer } from "use-immer";

export default function UpdateStateObject() {
  const [person, setPerson] = useImmer({
    firstName: "Barbara",
    lastName: "Hepworth",
    email: "bhepworth@sculpture.com",
    detail: {
      age: 35,
      phone: 123456789,
      address: {
        currentAdd: "asdfasf",
        dobAdd: "tesets",
      },
    },
  });

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
      <label>
        Age:
        <input
          value={person.detail.age}
          onChange={(e) => {
            setPerson((draft) => {
              draft.detail.age = e.target.value;
            });
          }}
        />
      </label>
      {JSON.stringify(person)}
      <p>
        First name: {person.firstName} <br />
        Last Name:{person.lastName} <br />
        Email:({person.email})<br />
        age: {person.detail.age}
      </p>
    </>
  );
}
