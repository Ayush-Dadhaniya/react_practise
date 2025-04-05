import React, { useState, useEffect } from 'react';

const Card = () => {
    const [data, setData] = useState([]);

    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/posts')
            .then(response => response.json())
            .then(data => setData(data));
    }, []);

    return (
        <div className="flex flex-wrap gap-4 p-4">
            {data.map((item) => (
                <div key={item.id} className="container box-content border-2 h-64 w-60 p-2 overflow-hidden shadow-lg">
                    <div><img className="h-32 w-60 object-cover" src="./image.png" alt="" /></div>
                    <div className="text-sm font-bold mt-2">User ID: {item.userId}</div>
                    <div className="text-md font-semibold truncate w-full">{item.title}</div>
                    <div className="text-xs">ID: {item.id}</div>
                    <div className="text-sm line-clamp-3">{item.body}</div>
                </div>
            ))}
        </div>
    );
};

export default Card;
