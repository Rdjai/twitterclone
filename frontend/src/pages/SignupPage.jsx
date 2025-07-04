import React from 'react'
import InputComponent from '../utils/InputComponent'
import CostomBtn from '../utils/CostomBtn'
import { useState } from 'react';

const SignupPage = () => {
    const [formData, setformData] = useState({
        name: "",
        email: "",
        password: ""
    });

    const handleSubmit = (e) => {

    }



    return (
        <div className='min-h-screen flex items-center justify-center bg-gray-100 px-4'>
            <div className="max-w-md w-full bg-white p-8 rounded-xl shadow-md">
                <h2 className="text-2xl font-bold mb-6 text-center text-gray-800">
                    Signup for an Account
                </h2>
                <form
                >
                    <InputComponent
                        label="Email"
                        type="email"
                        name="email"
                        placeholder="Enter your email"
                        value={value}
                        onChange={() => { }}
                    />
                    <InputComponent
                        label="Name"
                        type="text"
                        name="name"
                        placeholder="Enter your name"
                        value={''}
                        onChange={() => { }}
                    />
                    <InputComponent
                        label="password"
                        type="text"
                        name="password"
                        placeholder="Enter your password"
                        value={''}
                        onChange={() => { }}
                    />
                    <CostomBtn
                        Text={"Sign Up"}
                    />


                </form>
            </div>

        </div>
    )
}

export default SignupPage