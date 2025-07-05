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
                <h2>Create an Account</h2>
                <b className='margin' >Already have an account? <Link href={"/signin"}>Log in</Link></b>
                <div className="col">
                    <input type="text" placeholder='First Name' />
                    <input type="text" placeholder='Last Name' />
                </div>
                <input type="email" placeholder='Email' />
                <div className="password">
                    <input type={passwordEyeOff ? "password" : "text"} placeholder='Password' />
                    {passwordEyeOff ? <EyeOff onClick={() => { setPasswordEyeOff(false) }} /> : <Eye onClick={() => { setPasswordEyeOff(true) }} />}
                </div>
                <div className="custom-checkbox">
                    <label htmlFor="agreecheckbox" aria-checked={checkbox} onClick={() => { setCheckbox(!checkbox) }}>{checkbox ? <Check /> : <></>}</label>
                    <input type="checkbox" hidden id='agreecheckbox' />
                    <b>I agree to the <Link href="/terms">Terms & conditions</Link></b>
                </div>
                <input type="submit" value={"Create Account"} />
                <div className="or"></div>
                <div className="col">
                    <div className="btn">
                        <Icon name={"google"} />
                        <p>Google</p>
                    </div>
                    <div className="btn">
                        <Icon name={"apple"} />
                        <p>Apple</p>
                    </div>
                </div>
            </form>
        </div>
    )
}

export default page