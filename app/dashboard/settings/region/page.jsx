"use client"
import { ArrowLeft } from 'lucide-react';
import { useRouter } from 'next/navigation';
import React from 'react'

const page = () => {
    const router = useRouter();
    return (
        <div className='create'>
            <h2 className='crumb' onClick={() => { router.push("/dashboard/settings/") }}><ArrowLeft /><span>Region</span></h2>
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