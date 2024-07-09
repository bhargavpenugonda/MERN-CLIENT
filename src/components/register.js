import React, { useState } from "react";
import axios from "axios";

export default function Register() {
  const [formData, setForm] = useState({
    name: "",
    email: "",
    password: ""
  });
  const [error, setError] = useState(null);

  const handleChange = (e) => {
    const { id, value } = e.target;
    setForm((prevFormData) => ({
      ...prevFormData,
      [id]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post("http://localhost:3001/users/create", formData);
      console.log("Form data submitted successfully!", response.data);
      setForm({
        name: "",
        email: "",
        password: ""
      });
    } catch (error) {
      setError(error.message);
    }
  };

  return (
    <form className="flex flex-col w-full max-w-md p-4 mx-auto my-8 bg-orange rounded-md shadow-md" onSubmit={handleSubmit}>
      <h1 className="text-3xl font-bold mb-4">Register Here!</h1>
      <div className="form-group mb-4">
        <label htmlFor="name" className="text-sm block mb-1">Name</label>
        <input
          type="text"
          id="name"
          value={formData.name}
          className="w-full p-2 pl-10 text-sm text-gray-700 border-1 border-gray-300 rounded-md"
          onChange={handleChange}
          placeholder="Enter your name"
          required
        />
      </div>
      <div className="form-group mb-4">
        <label htmlFor="email" className="text-sm block mb-1">Email</label>
        <input
          type="email"
          id="email"
          value={formData.email}
          className="w-full p-2 pl-10 text-sm text-gray-700 border-1 border-gray-300 rounded-md"
          onChange={handleChange}
          placeholder="Enter your email"
          required
        />
      </div>
      <div className="form-group mb-4">
        <label htmlFor="password" className="text-sm block mb-1">Password</label>
        <input
          type="password"
          id="password"
          value={formData.password}
          className="w-full p-2 pl-10 text-sm text-gray-700 border-1 border-gray-300 rounded-md"
          onChange={handleChange}
          placeholder="Enter your password"
          required
        />
      </div>

      {error && <div className="text-red-500">{error}</div>}

      <button
        type="submit" onClick={handleSubmit}
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-md"
      >
        Submit
      </button>
    </form>
  );
}