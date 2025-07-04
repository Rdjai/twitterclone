import React from 'react'
import InputComponent from '../utils/InputComponent'
import CostomBtn from '../utils/CostomBtn'
import { useState } from 'react';
import { singupUser } from '../services/apiService'
import { Link } from "react-router-dom";
const SignupPage = () => {
    const [formData, setformData] = useState({
        Name: "",
        email: "",
        password: ""
    });

    const handleChange = (e) => {
        setformData({ ...formData, [e.target.name]: e.target.value });


    }

    const handlesubmit = async (e) => {
        e.preventDefault();
        console.log("Signup Data:", formData);
        try {
            const res = await singupUser({ ...formData });

            console.log("✅ Signup Success:", res);
            alert("Account created successfully!");
        } catch (error) {
            console.error("❌ Signup Error:", error);
            alert(error?.error || "Signup failed");
        }
    }


    return (
        <div className='min-h-screen flex items-center justify-center bg-gray-100 px-4'>
            <div className="max-w-md w-full bg-black p-8 rounded-xl shadow-md">
                <h2 className="text-2xl font-bold mb-6 text-center text-gray-800">
                    Signup for an Account
                </h2>
                <form
                    onSubmit={handlesubmit}
                    className="space-y-4"  // Added space between form elements

                >
                    <InputComponent
                        label="Email"
                        type="email"
                        name="email"
                        placeholder="Enter your email"
                        value={formData.email}
                        onChange={handleChange}
                    />
                    <InputComponent
                        label="Name"
                        type="text"
                        name="Name"
                        placeholder="Enter your name"
                        value={formData.Name}
                        onChange={handleChange}
                    />
                    <InputComponent
                        label="password"
                        type="text"
                        name="password"
                        placeholder="Enter your password"
                        value={formData.password}
                        onChange={handleChange}
                    />
                    <CostomBtn
                        Text={"Sign Up"}
                    />


                </form>
                <p className="mt-4 text-sm text-center text-gray-300 cursor-pointer">
                    have an account?{" "}
                    <Link to="/login" className="text-blue-400 hover:underline" >Login</Link>
                    {/* <a Link="/login" className="text-blue-400 hover:underline">
                        Login
                    </a> */}
                </p>
            </div>

        </div>
    )
}

export default SignupPage