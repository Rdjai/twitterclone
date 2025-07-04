import React, { useState } from 'react';
import InputComponent from '../utils/InputComponent';
import { loginUser } from '../services/apiService'
import { Link } from "react-router-dom";
const LoginPage = () => {
    const [formData, setFormData] = useState({ email: '', password: '' });

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        console.log("Login Data:", formData);
        try {
            const res = await loginUser(formData);
            console.log("✅ Signup Success:", res);
            alert("Account logged in successfully!");
            localStorage.setItem("token", res.token);
            window.location.href = "/"; // Redirect to home page after login
        } catch (error) {
            console.error("Login Error:", error);
            alert(error?.error || "Signup failed");
        }
    };

    return (
        <div className="min-h-screen flex items-center justify-center bg-gray-100">
            <div className="max-w-md w-full bg-black p-8 rounded-xl shadow-md">
                <h2 className="text-2xl font-bold mb-6 text-center text-white">Login to Your Account</h2>

                <form onSubmit={handleSubmit}>
                    <InputComponent
                        label="Email Address"
                        type="email"
                        name="email"
                        placeholder="Enter your email address"
                        value={formData.email}
                        onChange={handleChange}
                    />
                    <InputComponent
                        label="Password"
                        type="password"
                        name="password"
                        placeholder="••••••••"
                        value={formData.password}
                        onChange={handleChange}
                    />
                    <button
                        type="submit"
                        className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-4 rounded-lg transition duration-200"
                    >
                        Sign In
                    </button>
                </form>

                <p className="mt-4 text-sm text-center text-gray-300">
                    Don’t have an account?{" "}
                    <Link to="/signup" className="text-blue-400 hover:underline" >Sing up</Link>

                </p>
            </div>
        </div>
    );
};

export default LoginPage;
