"use client"
import { ArrowLeft } from 'lucide-react'
import { useRouter } from 'next/navigation';
import React from 'react'

const page = () => {
    const router = useRouter();
    return (
        <div className='create'>
            <h2 className='crumb' onClick={() => { router.push("/dashboard/settings/") }}><ArrowLeft /><span>Privacy</span></h2>
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