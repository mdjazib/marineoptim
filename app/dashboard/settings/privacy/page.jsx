"use client"
import React from 'react'

const page = () => {
    return (
        <div className='create'>
            <h2>Change Password</h2>
            <form action="">
                <div className="input">
                    <h5>Current Password</h5>
                    <input type="text" onFocus={(e) => { e.target.setAttribute("type", "text") }} onBlur={(e) => { e.target.setAttribute("type", "password") }} />
                </div>
                <div className="input">
                    <h5>New Password</h5>
                    <input type="text" onFocus={(e) => { e.target.setAttribute("type", "text") }} onBlur={(e) => { e.target.setAttribute("type", "password") }} />
                </div>
                <div className="input">
                    <h5>Confirm Password</h5>
                    <input type="text" onFocus={(e) => { e.target.setAttribute("type", "text") }} onBlur={(e) => { e.target.setAttribute("type", "password") }} />
                </div>
                <input type="submit" value={"Update"} />
            </form>
        </div>
    )
}

export default page