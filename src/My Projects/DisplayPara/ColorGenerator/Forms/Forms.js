import React from "react";
import { useState } from "react";

const Forms = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [people, setPeople] = useState("");
  let [newPeople] = "";

  const handleClick = (e) => {
    e.preventDefault();

    // console.log(name, email);
    if (name && email) {
      const person = { id: new Date().getTime().toString(), name, email };
      setPeople((people) => {
        return [...people, person];
      });

      // setName("");
      // setEmail("");
    } else {
      console.log("Empty value(s)");
    }
    console.log(people);
  };
  const handleRemove = (id) => {
    const newPeople = people.filter(id === people.id);
  };
  return (
    <div>
      <form onSubmit={handleClick}>
        <label htmlFor="name">Enter Name</label>
        <input
          type="text"
          id="name"
          value={name}
          onChange={(e) => {
            setName(e.target.value);
          }}
        />
        <br />
        <label htmlFor="email">Enter Email</label>
        <input
          type="email"
          id="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />{" "}
        <br />
        <button className="bg-blue-300 p-x-2 m-3" type="submit">
          Add
        </button>
        <section>
          {people &&
            people &&
            people.map((person) => (
              <div key={person.id}>
                <h1>{person.name}</h1>
                <button
                  className="bg-red-300 p-x-2 m-3"
                  type="submit"
                  onClick={(e) => {
                    handleRemove(id);
                  }}
                >
                  Remove
                </button>
              </div>
            ))}
        </section>
      </form>
    </div>
  );
};

export default Forms;
