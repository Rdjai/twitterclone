import React from 'react'

const CostomBtn = ({ Text }) => {
    return (
        <button
            type="submit"
            className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-4 rounded-lg transition duration-200"
        >
            {Text || "Submit"}
        </button>
    )
}

export default CostomBtn