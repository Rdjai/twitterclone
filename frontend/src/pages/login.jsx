import React from 'react'

const LoginPage = () => {
    return (
        <div className="min-h-screen flex items-center justify-center bg-gray-100">
            <div className="max-w-md w-full bg-black p-8 rounded-xl shadow-md">

                <h2 className="text-2xl font-bold mb-6 text-center text-gray-800"> Login to Your Account</h2>

                <form>
                    <div className="mb-4">
                        <label htmlFor="" className="block text-sm font-medium text-gray-700">              Email Address
                        </label>
                        <input
                            name='email'
                            // value={}
                            placeholder='Enter your email address'
                            required
                            type="email"
                            className="w-full mt-1 px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring focus:ring-blue-500" />
                    </div>
                    <div className="mb-6">
                        <lebel className="block text-sm font-medium text-gray-700"> Password</lebel>
                        <input
                            type="password"
                            name='password'
                            className='mt-1 w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring focus:ring-blue-500'
                            placeholder="••••••••"
                            required
                        />
                    </div>
                    <button
                        type="submit"
                        className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-4 rounded-lg transition duration-200"
                    >
                        Sign In
                    </button>

                </form>
                <p className="mt-4 text-sm text-center text-gray-600">
                    Don’t have an account?{" "}
                    <a href="/signup" className="text-blue-500 hover:underline">
                        Sign up
                    </a>
                </p>
            </div>
        </div>

    )
}

export default LoginPage