"use client"
import React from 'react'

function Button() {
    return (
        <div>
            <button className='bg-green-600 p-2 rounded-md text-white' onClick={() => console.log("I have clicked")}> Click here</button>
        </div>
    )
}

export default Button