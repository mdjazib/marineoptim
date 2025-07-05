"use client"
import React from 'react'

const page = () => {
    return (
        <div className='create'>
            <h2>Region</h2>
            <form action="">
                <div className="input">
                    <h5>Select Region</h5>
                    <select>
                        <option value="Sweden">Sweden</option>
                    </select>
                </div>
                <input type="submit" value={"Update"} />
            </form>
        </div>
    )
}

export default page