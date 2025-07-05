"use client"
import React from 'react'

const page = () => {
    return (
        <div className='create'>
            <h2>General</h2>
            <form action="">
                <div className="row">
                    <div className="input">
                        <h5>Time</h5>
                        <input type="time" />
                    </div>
                    <div className="input">
                        <h5>Date</h5>
                        <input type="date" />
                    </div>
                </div>
                <div className="input">
                    <h5>Mobile Number</h5>
                    <select>
                        <option value="24hr">24hr</option>
                        <option value="12hr">12hr</option>
                    </select>
                </div>
                <input type="submit" value={"Update"} />
            </form>
        </div>
    )
}

export default page