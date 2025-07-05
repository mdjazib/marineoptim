"use client"
import Image from 'next/image'
import Link from 'next/link'
import React, { useState } from 'react'
import Icon from '../Icon'
import { Check, Eye, EyeOff } from 'lucide-react'

const page = () => {
    const [passwordEyeOff, setPasswordEyeOff] = useState(true);
    const [checkbox, setCheckbox] = useState(false);
    return (
        <div className='auth-route'>
            <form action="">
                <Image src={"/logo.png"} width={120} height={80} alt='Logo' />
                <h2>Welcome!</h2>
                <b className='margin w-100' >Please enter your details <Link href="/signup">Create new account</Link></b>
                <input type="email" placeholder='Email' />
                <div className="password">
                    <input type={passwordEyeOff ? "password" : "text"} placeholder='Password' />
                    {passwordEyeOff ? <EyeOff onClick={() => { setPasswordEyeOff(false) }} /> : <Eye onClick={() => { setPasswordEyeOff(true) }} />}
                </div>
                <div className="custom-checkbox">
                    <label htmlFor="agreecheckbox" aria-checked={checkbox} onClick={() => { setCheckbox(!checkbox) }}>{checkbox ? <Check /> : <></>}</label>
                    <input type="checkbox" hidden id='agreecheckbox' />
                    <b className='forgot-password'>Remember me <Link href="/forgot-password">Forgot Password?</Link></b>
                </div>
                <input type="submit" value={"Sign in"} />
                <div className="col">
                    <div className="btn">
                        <Icon name={"google"} />
                        <p>Continue with Google</p>
                    </div>
                </div>
            </form>
        </div>
    )
}

export default page