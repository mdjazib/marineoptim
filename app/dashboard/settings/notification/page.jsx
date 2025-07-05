"use client"
import { Bell, ChevronRight, Earth, Info, MapPin, Search, ShieldCheck, SlidersHorizontal, UserRound } from 'lucide-react'
import Link from 'next/link'
import React, { useState } from 'react'

const page = () => {
    const [notification, setNotification] = useState(true);
    const [sound, setSound] = useState(true);
    return (
        <div className="settings">
            <div className="header">
                <h2>Notification</h2>
            </div>
            <div className="settings-routes">
                <Link href="javascript:void(0)" onClick={() => { setNotification(!notification) }}>
                    <div className="row"><h4>Notification</h4></div>
                    <div className="switch" aria-checked={notification}><div className="indicator"></div></div>
                </Link>
                <Link href="javascript:void(0)" onClick={() => { setSound(!sound) }}>
                    <div className="row"><h4>Sound</h4></div>
                    <div className="switch" aria-checked={sound}><div className="indicator"></div></div>
                </Link>
            </div>
        </div>
    )
}

export default page