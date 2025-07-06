"use client"
import { ArrowLeft } from 'lucide-react'
import { useRouter } from 'next/navigation'
import React from 'react'

const page = () => {
    const router = useRouter();
    return (
        <div className='create'>
            <h2 className='crumb' onClick={() => { router.push("/dashboard/settings/") }}><ArrowLeft /><span>Profile</span></h2>
            <form action="">
                <div className="row">
                    <div className="input">
                        <h5>Name</h5>
                        <input type="text" />
                    </div>
                    <div className="input">
                        <h5>Country</h5>
                        <select></select>
                    </div>
                </div>
                <div className="input">
                    <h5>Mobile Number</h5>
                    <input type="tel" />
                </div>
                <input type="submit" value={"Update"} />
            </form>
        </div>
    )
}

export default page