'use client'
import React, { useState } from 'react';

const Counter = () => {
    const [count, setCount] = useState(0)
    return (
      <div>
        <h2 className="text-5xl text-yellow-500">Counter: {count}</h2>

        <button onClick={() => setCount(count + 1)} className='btn btn-error'>Increment</button>
      </div>
    );
};

export default Counter;