import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
const Login = ({ setUser }) => {
  const navigate = useNavigate();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!name || !email) return;
    setUser({ name: name, email: email });
    navigate("/dashboard");
    // const name = e.target.value(name);
    // const email = e.target.value(email);
    // setName(name);
    // setEmail(email);
    // console.log(name, email);
    // setName("");
    // setEmail("");
  };
  return (
    <div>
      <section className="w-96 h-96 m-auto text-center font-bold border-4 border-blue-700 rounded-lg">
        <form onSubmit={handleSubmit}>
          <label htmlFor="name">Name</label>
          <input
            className="p-2 m-2 border-4 border-slate-500 rounded-lg"
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />

          <label htmlFor="Email">Email</label>
          <input
            className="p-2 m-2 border-4 border-slate-500 rounded-lg"
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <button className="bg-blue-800 p-2 m-4 rounded-lg">Login</button>
        </form>
      </section>
    </div>
  );
};

export default Login;
