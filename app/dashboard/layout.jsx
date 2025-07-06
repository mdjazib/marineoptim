"use client"
import { AlignJustify, Archive, Bell, BellDot, CirclePlus, Crown, Earth, Home, Info, LogOut, MapPin, MessageCircleMore, Settings, UserRound, X } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import React, { useEffect, useRef, useState } from 'react'
import ShipmentConfirmed from './modal/ShipmentConfirmed'
import ShipmentDetails from './modal/ShipmentDetails'

const RootLayout = ({ children }) => {
    const [shipmentConfirmedModal, setShipmentConfirmedModal] = useState(false);
    const [shipmentDetailsModal, setShipmentDetailsModal] = useState(false);
    const [notifications, setNotifications] = useState({ total: 1 });
    const [menu, setMenu] = useState(false);
    const layout = useRef();
    const [width, setWidth] = useState(0);
    const pathname = usePathname();
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        if (!layout.current) return;
        const observer = new ResizeObserver(entries => {
            for (let entry of entries) {
                setWidth(entry.contentRect.width);
            }
        });
        observer.observe(layout.current);
        return () => observer.disconnect();
    }, []);

    useEffect(() => {
        setLoading(false);
    }, [pathname]);
    useEffect(() => {
        document.addEventListener('keypress', (e) => {
            setShipmentConfirmedModal(e.key === "c" || e.key === "C");
            setShipmentDetailsModal(e.key === "d" || e.key === "D");
        })
    }, []);
    return (
        <div className="layout" ref={layout}>
            {loading ? <div className="route-loading"><div className="bar"></div></div> : <></>}
            {shipmentConfirmedModal ? <ShipmentConfirmed setShipmentConfirmedModal={setShipmentConfirmedModal} /> : <></>}
            {shipmentDetailsModal ? <ShipmentDetails setShipmentDetailsModal={setShipmentDetailsModal} /> : <></>}
            <nav className={menu ? "mob-menu-open" : "mob-menu-close"}>
                <div className="header">
                    <Image src={"/logo-mini.png"} alt='Logo' width={40} height={40} />
                    {width <= 660 ? <X onClick={() => { setMenu(false) }} /> : <AlignJustify />}
                </div>
                <ul>
                    <li><Link href="/dashboard/" className={pathname === "/dashboard" ? "active" : "inactive"} onClick={() => { setLoading(pathname === "/dashboard" ? false : true); setMenu(false); }}><Home />Home</Link></li>
                    <li><Link href="/dashboard/tracking" className={pathname === "/dashboard/tracking" ? "active" : "inactive"} onClick={() => { setLoading(pathname === "/dashboard/tracking" ? false : true); setMenu(false); }}><MapPin />Tracking</Link></li>
                    <li><Link href="/dashboard/archived" className={pathname === "/dashboard/archived" ? "active" : "inactive"} onClick={() => { setLoading(pathname === "/dashboard/archived" ? false : true); setMenu(false); }}><Archive />Archived</Link></li>
                    <li><Link href="/dashboard/settings" className={pathname === "/dashboard/settings" ? "active" : "inactive"} onClick={() => { setLoading(pathname === "/dashboard/settings" ? false : true); setMenu(false); }}><Settings />Settings</Link></li>
                    {
                        menu && width <= 660 ? <>
                            <li><Link href="/dashboard/shipment/new" className={pathname === "/dashboard/shipment/new" ? "active" : "inactive"} onClick={() => { setLoading(pathname === "/dashboard/shipment/new" ? false : true); setMenu(false); }}><CirclePlus />New Shipment</Link></li>
                            <li><Link href="/dashboard/notifications" className={pathname === "/dashboard/notifications" ? "active" : "inactive"} onClick={() => { setLoading(pathname === "/dashboard/notifications" ? false : true); setMenu(false); }}>{notifications.total >= 1 ? <BellDot /> : <Bell />}Notifications</Link></li>
                            <li><Link href="/dashboard/profile" className={pathname === "/dashboard/profile" ? "active" : "inactive"} onClick={() => { setLoading(pathname === "/dashboard/profile" ? false : true); setMenu(false); }}><UserRound />Profile</Link></li>
                            {/* ... You can add more routes here for mobile menu only */}
                        </> : <></>
                    }
                </ul>
                <ul className='footer'>
                    <li><Link href="/dashboard/subscription" className={pathname === "/dashboard/subscription" ? "active" : "inactive"} onClick={() => { setLoading(pathname === "/dashboard/subscription" ? false : true); setMenu(false); }}><Crown />Subscription</Link></li>
                    <li><Link href="/dashboard/" onClick={() => { setLoading(pathname === "/dashboard" ? false : true); setMenu(false); }}><Info />Support</Link></li>
                    <li><Link href="/dashboard/" onClick={() => { setLoading(true); setMenu(false); }}><LogOut />Logout</Link></li>
                </ul>
            </nav>
            <main>
                <header>
                    <div className="col">
                        <Image src={"/logo-mini.png"} alt='Logo' width={40} height={40} />
                        <h2 style={{ fontSize: menu ? "10px" : "16px" }}>MARINEOPTIM</h2>
                        {menu ? <></> : <AlignJustify onClick={() => { setMenu(true) }} />}
                    </div>
                    <div className="col">
                        <Link href="/dashboard/shipment/new" className='new-btn' onClick={() => { setLoading(pathname === "/dashboard/shipment/new" ? false : true); setMenu(false); }}>New Shipment</Link>
                        <div className="btn-grp">
                            <Link href="/dashboard/" onClick={() => { setLoading(pathname === "/dashboard" ? false : true); setMenu(false); }}><MessageCircleMore /></Link>
                            <Link href="/dashboard/notifications" onClick={() => { setLoading(pathname === "/dashboard/notifications" ? false : true); setMenu(false); }}>{notifications.total >= 1 ? <BellDot /> : <Bell />}</Link>
                            <Link href="/dashboard/" onClick={() => { setLoading(pathname === "/dashboard" ? false : true); setMenu(false); }}><Earth /></Link>
                        </div>
                        <Link href="/dashboard/profile" className='user-btn' onClick={() => { setLoading(pathname === "/dashboard/profile" ? false : true); setMenu(false); }}><Image src={"/user.png"} alt='user' width={40} height={40} /></Link>
                    </div>
                </header>
                <div className='view'>
                    {children}
                </div>
            </main>
        </div>
    )
}

export default RootLayout