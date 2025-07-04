import React from 'react'

const InputComponent = ({ label, InputType, TypeName, Inputplaceholder, value, onChange }) => {
    return (
        <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700">
                {label} {/* Use the label prop for the label text */}
            </label>
            <input
                type={InputType}
                name={TypeName}
                placeholder={Inputplaceholder}
                value={value}
                onChange={onChange}
                className='w-full mt-1 px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring focus:ring-blue-500'

                required
            />
        </div>
    )
}

export default InputComponent