import React, { useState } from "react";
import NavBar from "../../components/navbar";

function Signup() {
  const [name, setName] = useState(null);
  const [email, setEmail] = useState(null);
  const [password, setPassword] = useState(null);
  const [error, setError] = useState(null);

  return (
    <div className="font-poppins">
      <NavBar />
      <div className="p-8 flex flex-col">
        <p className="text-xl font-bold mb-2">Signup</p>
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          className="w-96 border rounded-sm px-2 py-1 mb-2"
          placeholder="Enter your name"
        />
        <input
          type="text"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="w-96 border rounded-sm px-2 py-1 mb-2"
          placeholder="Enter your email address"
        />
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="w-96 border rounded-sm px-2 py-1 mb-2"
          placeholder="Enter your password"
        />
        <p className="border rounded-md px-2 py-1 w-fit">Signup</p>
      </div>
    </div>
  );
}

export default Signup;
