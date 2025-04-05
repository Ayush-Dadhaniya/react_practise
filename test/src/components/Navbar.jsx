import React from 'react'

const Navbar = () => {
    return (
        <div>
            <nav>
                <ul className="flex bg-gray-800 text-white">
                    <li className="p-4">Logo</li>
                    <li className="p-4">Home</li>
                    <li className="p-4">About</li>
                    <li className="p-4">Contact</li>
                </ul>
            </nav>
        </div>
    )
}

export default Navbar