import React from "react";
import { useState } from "react";

const Form = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [age, setAge] = useState("");
  const [people, setPeople] = useState("");
  const handleSubmit = (e) => {
    e.preventDefault();
    if (name && email && age) {
      const person = { id: new Date().getTime().toString(), name, email, age };
      setPeople((people) => [...people, person]);
      setName("");
      setEmail("");
      setAge("");

      console.log(people);
    } else {
      alert("Enter Values");
    }
  };

  return (
    <>
      <article>
        <div className="w-96  m-auto border-4 border-black shadow-lg rounded-lg bg-teal-200 mt-10 p-5 pb-2 text-center">
          <form onSubmit={handleSubmit}>
            <div>
              <label htmlFor="name" className="mr-5 text-xl font-bold">
                Name
              </label>
              <input
                type="text"
                id="name"
                value={name}
                // defaultValue=" "
                className="p-2 rounded-lg"
                onChange={(e) => {
                  setName(e.target.value);
                }}
              />
            </div>
            <br />
            <div>
              <label htmlFor="email" className="mr-5 text-xl font-bold mb-5">
                Email
              </label>
              <input
                type="email"
                id="email"
                // defaultValue=" "
                value={email}
                className="p-2 rounded-lg"
                onChange={(e) => {
                  setEmail(e.target.value);
                }}
              />
            </div>
            <div className="mt-5">
              <label htmlFor="age" className="mr-5 text-xl font-bold mt-5">
                Age
              </label>
              <input
                type="number"
                id="age"
                value={age}
                // defaultValue=" "
                className="p-2 rounded-lg "
                onChange={(e) => {
                  setAge(e.target.value);
                }}
              />
            </div>
            <div>
              <button
                type="submit"
                className="p-1 m-3  bg-black text-white text-xl rounded"
              >
                Submit
              </button>
            </div>
          </form>
        </div>
        <div>
          {Array.isArray(people) &&
            people.map((person) => {
              const { name, email, age } = person;
              return (
                <div
                  key="id"
                  className="w-96  m-auto border-4 border-black shadow-lg rounded-lg bg-teal-200 mt-10 p-5 pb-2 text-center"
                >
                  <h1>{name}</h1>
                  <h2>{email}</h2>
                  <h2>{age}</h2>
                </div>
              );
            })}
        </div>
      </article>
    </>
  );
};

export default Form;
