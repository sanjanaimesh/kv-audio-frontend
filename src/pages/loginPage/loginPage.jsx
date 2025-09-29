import axios from "axios";
import { useState } from "react";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";

export default function LoginPage() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const navigate = useNavigate()

    function handleOnSubmit(e) {
        e.preventDefault();
        console.log(email, password)
        axios.post("http://localhost:3000/api/users/login", {
            email: email,
            password: password
        }).then((res) => {
            console.log(res)
            toast.success("Login success")
            const user = res.data.user
            localStorage.setItem("token", res.data.token) //local storage eke token eka save wenawa

            if (user.role === "admin") {
                navigate("/admin")
            } else {
                navigate("/")
            }
        }).catch((err) => {
            console.log(err)
            toast.error(err.response.data.error)
        })
    }
    return (

        <div className="w-full h-screen bg-gradient-to-br from-gray-900 via-black to-gray-800 flex justify-center items-center">
            <form action="" onSubmit={handleOnSubmit}>
                <div className="w-[400px] bg-gray-900/80 backdrop-blur-md shadow-2xl rounded-2xl p-8 flex flex-col items-center">
                    {/* Logo */}
                    <img
                        src="/logo.jpg"
                        alt="Logo"
                        className="w-16 h-16 mb-6 rounded-full shadow-md border border-gray-700"
                    />

                    {/* Title */}
                    <h1 className="text-2xl font-semibold text-white mb-6">
                        Welcome
                    </h1>

                    {/* Email Input */}
                    <input
                        type="email"
                        placeholder="Enter your email"
                        value={email}
                        onChange={(e) => {
                            setEmail(e.target.value)
                        }}
                        className="w-full mb-4 px-4 py-3 rounded-lg bg-gray-800 text-gray-200 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-indigo-500 transition"
                    />

                    {/* Password Input */}
                    <input
                        type="password"
                        placeholder="Enter your password"
                        value={password}
                        onChange={(e) => {
                            setPassword(e.target.value)
                        }}

                        className="w-full mb-6 px-4 py-3 rounded-lg bg-gray-800 text-gray-200 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-indigo-500 transition"
                    />

                    {/* Login Button */}
                    <button className="w-full py-3 bg-indigo-600 hover:bg-indigo-700 rounded-lg text-white font-semibold shadow-lg transition" >
                        Login
                    </button>

                    {/* Extra Links */}
                    <div className="flex justify-between w-full mt-4 text-sm text-gray-400">
                        <a href="#" className="hover:text-indigo-400 transition">
                            Forgot password?
                        </a>
                        <a href="#" className="hover:text-indigo-400 transition">
                            Create account
                        </a>
                    </div>
                </div>
            </form>
        </div>
    );
}
