import React, { useState } from "react";
// import axios from "axios"; // You'll need to make HTTP requests to your backend API
import { useNavigate } from "react-router-dom"; // If you want to redirect after successful registration

function RegistrationForm() {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
    name: "",
    phone: "",
    role: "patient",
    gender: "",
    bloodType: "",
    photo: null, // Use this for file upload
  });

  const navigation= useNavigate(); // Use for redirection

  const handleInputChange = (e) => {
    const { name, value, type } = e.target;
    setFormData({
      ...formData,
      [name]: type === "file" ? e.target.files[0] : value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(formData);

    // Create a FormData object to send the file
    // const formDataToSend = new FormData();
    // for (const key in formData) {
    //   formDataToSend.append(key, formData[key]);
    // }

    // try {
    //   const response = await axios.post("/api/register", formDataToSend, {
    //     headers: {
    //       "Content-Type": "multipart/form-data",
    //     },
    //   });

    //   // Handle successful registration, e.g., show a success message, redirect, etc.
    //   console.log("User registered successfully:", response.data);
    //   history.push("/login"); // Redirect to the login page after successful registration
    // } catch (error) {
    //   console.error("Registration failed:", error);
    //   // Handle registration error, e.g., display an error message to the user
    // }
  };

  return (
    <div className="max-w-md mx-auto mt-8 p-6 bg-white shadow-md">
      <h2 className="text-2xl font-semibold mb-4">User Registration</h2>
      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label htmlFor="email" className="block text-gray-700">Email</label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleInputChange}
            required
            className="w-full border rounded-lg py-2 px-3 text-gray-700"
          />
        </div>
        <div className="mb-4">
          <label htmlFor="password" className="block text-gray-700">Password</label>
          <input
            type="password"
            id="password"
            name="password"
            value={formData.password}
            onChange={handleInputChange}
            required
            className="w-full border rounded-lg py-2 px-3 text-gray-700"
          />
        </div>
        <div className="mb-4">
          <label htmlFor="name" className="block text-gray-700">Name</label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleInputChange}
            required
            className="w-full border rounded-lg py-2 px-3 text-gray-700"
          />
        </div>
        <div className="mb-4">
          <label htmlFor="phone" className="block text-gray-700">Phone</label>
          <input
            type="text"
            id="phone"
            name="phone"
            value={formData.phone}
            onChange={handleInputChange}
            className="w-full border rounded-lg py-2 px-3 text-gray-700"
          />
        </div>
        <div className="mb-4">
          <label htmlFor="role" className="block text-gray-700">Role</label>
          <select
            id="role"
            name="role"
            value={formData.role}
            onChange={handleInputChange}
            className="w-full border rounded-lg py-2 px-3 text-gray-700"
          >
            <option value="patient">Patient</option>
            <option value="admin">Admin</option>
          </select>
        </div>
        <div className="mb-4">
          <label htmlFor="gender" className="block text-gray-700">Gender</label>
          <select
            id="gender"
            name="gender"
            value={formData.gender}
            onChange={handleInputChange}
            className="w-full border rounded-lg py-2 px-3 text-gray-700"
          >
            <option value="male">Male</option>
            <option value="female">Female</option>
            <option value="other">Other</option>
          </select>
        </div>
        <div className="mb-4">
          <label htmlFor="bloodType" className="block text-gray-700">Blood Type</label>
          <input
            type="text"
            id="bloodType"
            name="bloodType"
            value={formData.bloodType}
            onChange={handleInputChange}
            className="w-full border rounded-lg py-2 px-3 text-gray-700"
          />
        </div>
        <div className="mb-4">
          <label htmlFor="photo" className="block text-gray-700">Photo</label>
          <input
            type="file"
            id="photo"
            name="photo"
            accept="image/*"
            onChange={handleInputChange}
            className="w-full border rounded-lg py-2 px-3 text-gray-700"
          />
        </div>
        <button
          type="submit"
          className="bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded-lg"
        >
          Register
        </button>
      </form>
    </div>
  );
}

export default RegistrationForm;
