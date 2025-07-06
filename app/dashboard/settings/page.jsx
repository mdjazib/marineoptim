import { Bell, ChevronRight, Earth, Info, MapPin, Search, ShieldCheck, SlidersHorizontal, UserRound } from 'lucide-react'
import Link from 'next/link'
import React from 'react'

const page = () => {
    return (
        <div className="settings">
            <div className="header">
                <h2>Settings</h2>
                <div className="search">
                    <Search />
                    <input type="search" placeholder='Search...' />
                </div>
            </div>
            <div className="settings-routes">
                <Link href="/dashboard/profile">
                    <UserRound />
                    <div className="row">
                        <h4>Profile</h4>
                        <p>Profile Setting, Name</p>
                    </div>
                    <ChevronRight />
                </Link>
                <Link href="/dashboard/settings/general">
                    <SlidersHorizontal />
                    <div className="row">
                        <h4>General</h4>
                        <p>Date & Time setting</p>
                    </div>
                    <ChevronRight />
                </Link>
                <Link href="/dashboard/settings/language">
                    <Earth />
                    <div className="row">
                        <h4>Language</h4>
                        <p>Language & Input Setting</p>
                    </div>
                    <ChevronRight />
                </Link>
                <Link href="/dashboard/settings/notification">
                    <Bell />
                    <div className="row">
                        <h4>Notification</h4>
                        <p>Sound & Notification</p>
                    </div>
                    <ChevronRight />
                </Link>
                <Link href="/dashboard/settings/privacy">
                    <ShieldCheck />
                    <div className="row">
                        <h4>Privacy</h4>
                        <p>Password & Security</p>
                    </div>
                    <ChevronRight />
                </Link>
                <Link href="/dashboard/settings/about">
                    <Info />
                    <div className="row">
                        <h4>About</h4>
                        <p>Information & About</p>
                    </div>
                    <ChevronRight />
                </Link>
                <Link href="/dashboard/settings/region">
                    <MapPin />
                    <div className="row">
                        <h4>Region</h4>
                        <p>Set Current account region</p>
                    </div>
                    <ChevronRight />
                </Link>
            </div>
        </div>
    )
}

export default page