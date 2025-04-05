import React from 'react'

const Footer = ({count}) => {
    return (
        <div>
            <div className="flex justify-center fixed bottom-0 w-full items-center bg-gray-800 text-white h-16">
                <p className="text-center justify-center">copyright &copy; 2023 All rights reserved</p>
                <p>I am counter from parent {count}</p>
            </div>
        </div>
    )
}

export default Footer