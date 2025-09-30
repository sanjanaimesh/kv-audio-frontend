import axios from "axios";
import { useState } from "react";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";

export default function RegisterPage() {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [address, setAddress] = useState("");
  const [phone, setPhone] = useState("");
  const navigate = useNavigate();

  function handleRegisterSubmit(e) {
    e.preventDefault();
    console.log({
      firstName,
      lastName,
      email,
      password,
      address,
      phone,
    });
    
      axios.post("http://localhost:3000/api/users" , {
        email : email,
        firstName : firstName,
        lastName:lastName,
        password:password,
        address:address,
        phone:phone,
    } ).then(
        (res)=>{
            toast.success("register succsess")
            navigate("/login")
        }
    ).catch((err)=>{
        toast.err(err?.response?.data?.error || "An error occured")
    })
  }

  return (
    <div className="w-full h-screen bg-gradient-to-br from-gray-900 via-black to-gray-800 flex justify-center items-center">
      <form onSubmit={handleRegisterSubmit}>
        <div className="w-[400px] bg-gray-900/80 backdrop-blur-md shadow-2xl rounded-2xl p-8 flex flex-col items-center">
          {/* Logo */}
          <img
            src="/logo.jpg"
            alt="Logo"
            className="w-16 h-16 mb-6 rounded-full shadow-md border border-gray-700"
          />

          {/* Title */}
          <h1 className="text-2xl font-semibold text-white mb-6">
            Create Account
          </h1>

          {/* First Name */}
          <input
            type="text"
            placeholder="Enter your first name"
            value={firstName}
            onChange={(e) => setFirstName(e.target.value)}
            className="w-full mb-4 px-4 py-3 rounded-lg bg-gray-800 text-gray-200 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-indigo-500 transition"
          />

          {/* Last Name */}
          <input
            type="text"
            placeholder="Enter your last name"
            value={lastName}
            onChange={(e) => setLastName(e.target.value)}
            className="w-full mb-4 px-4 py-3 rounded-lg bg-gray-800 text-gray-200 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-indigo-500 transition"
          />

          {/* Email */}
          <input
            type="email"
            placeholder="Enter your email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full mb-4 px-4 py-3 rounded-lg bg-gray-800 text-gray-200 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-indigo-500 transition"
          />

          {/* Password */}
          <input
            type="password"
            placeholder="Enter your password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="w-full mb-4 px-4 py-3 rounded-lg bg-gray-800 text-gray-200 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-indigo-500 transition"
          />

          {/* Address */}
          <input
            type="text"
            placeholder="Enter your address"
            value={address}
            onChange={(e) => setAddress(e.target.value)}
            className="w-full mb-4 px-4 py-3 rounded-lg bg-gray-800 text-gray-200 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-indigo-500 transition"
          />

          {/* Phone */}
          <input
            type="tel"
            placeholder="Enter your phone number"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            className="w-full mb-6 px-4 py-3 rounded-lg bg-gray-800 text-gray-200 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-indigo-500 transition"
          />

          {/* Register Button */}
          <button className="w-full py-3 bg-indigo-600 hover:bg-indigo-700 rounded-lg text-white font-semibold shadow-lg transition">
            Register
          </button>

          {/* Extra Links */}
          <div className="flex justify-between w-full mt-4 text-sm text-gray-400">
            <a href="#" className="hover:text-indigo-400 transition">
              Already have an account?
            </a>
            <a href="#" className="hover:text-indigo-400 transition">
              Need help?
            </a>
          </div>
        </div>
      </form>
    </div>
  );
}
