import React from 'react'
import { useSelector } from 'react-redux'
const Navbar = () => {
    const counterValue = useSelector((state) => state.counter.value);

    return (
        <div>
            <nav>
                <ul className="flex bg-gray-800 text-white">
                    <li className="p-4">Logo</li>
                    <li className="p-4">Home</li>
                    <li className="p-4">About</li>
                    <li className="p-4">Contact</li>
                    {/* <li>{counterValue}</li> */}
                </ul>
            </nav>
        </div>
    )
}

export default Navbar