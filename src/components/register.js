import axios from "axios";
import { useState } from "react";

export default function Register() {
  const [formdata, setForm] = useState({
    name: "",
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const [res, setRes] = useState("");

  const HandleSubmit = async (e) => {
    e.preventDefault(); // Prevent default form submission
    try {
      const response = await axios.post("http://localhost:3001/users/register", formdata);
      console.log("Form data submitted successfully!", response);
      setForm({ name: "", email: "", password: "" });
      setRes("User Registered Successfully !");
    } catch (error) {
      console.error("Error submitting form:", error);
    }
  };

  return (
    <form className="flex w-200 flex-col items-center p-4 bg-black-100 border border-blue-300 rounded-lg p-3 m-4">
      <h1 className="font-bold text-lg mb-4">Register Here!</h1>
      <h5 className="text-red-600">{res}</h5>
      <div className="form-group flex flex-col w-200 mb-4">
        <label htmlFor="username" className="text-sm mb-2">
          Name
        </label>
        <input
          className="border border-gray-300 p-2 rounded"
          id="name"
          name="name"
          type="text"
          value={formdata.name}
          onChange={handleChange}
          placeholder="Enter your name"
        />
        <label htmlFor="email" className="text-sm mb-2">
          Email
        </label>
        <input
          className="border border-gray-300 p-2 rounded"
          id="email"
          type="email"
          name="email"
          value={formdata.email}
          onChange={handleChange}
          placeholder="Enter your Email"
        />
        <label htmlFor="password" className="text-sm mb-2">
          Password
        </label>
        <input
          className="border border-gray-300 p-2 rounded"
          id="password"
          type="password"
          name="password"
          value={formdata.password}
          onChange={handleChange}
          placeholder="Enter your password"
        />
        <button
          type="submit"
          onClick={(e) => HandleSubmit(e)}
          className="bg-blue-500 p-1 m-3 w-30 text-white border-gray-300 p-2 rounded"
        >
          Submit
        </button>
      </div>
    </form>
  );
}