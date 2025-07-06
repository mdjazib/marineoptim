"use client"
import Image from 'next/image'
import React, { useState } from 'react'
import ShipmentConfirmed from '../../modal/ShipmentConfirmed';

const page = () => {
    const [shipmentConfirmedModal, setShipmentConfirmedModal] = useState(false);
    return (
        <>
            {shipmentConfirmedModal ? <ShipmentConfirmed setShipmentConfirmedModal={setShipmentConfirmedModal} /> : <></>}
            <div className='create'>
                <h2>New Shipment</h2>
                <form action="" onSubmit={(e) => {
                    e.preventDefault();
                    setShipmentConfirmedModal(true);
                }}>
                    <h3>Basic Information</h3>
                    <div className="input">
                        <h5>Email</h5>
                        <input type="email" />
                    </div>
                    <div className="row">
                        <div className="input">
                            <h5>Company</h5>
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
                    <div className="row">
                        <div className="input">
                            <h5>Fax</h5>
                            <select></select>
                        </div>
                        <div className="input">
                            <h5>Hst. No</h5>
                            <select></select>
                        </div>
                    </div>
                    <div className="input">
                        <h5>Address</h5>
                        <input type="text" />
                    </div>
                    <h2>Shipment Information</h2>
                    <div className="input">
                        <h5>Shipment Type</h5>
                        <input type="text" />
                    </div>
                    <div className="row">
                        <div className="input">
                            <h5>From</h5>
                            <select></select>
                        </div>
                        <div className="input">
                            <h5>To</h5>
                            <select></select>
                        </div>
                    </div>
                    <div className="input">
                        <h5>Address</h5>
                        <input type="text" />
                    </div>
                    <div className="row">
                        <div className="input">
                            <h5>Volume</h5>
                            <input type="text" />
                        </div>
                        <div className="input">
                            <h5>Weigh</h5>
                            <input type="text" />
                        </div>
                    </div>
                    <div className="input">
                        <h5>Voyages Detail</h5>
                        <textarea></textarea>
                    </div>
                    <div className="input -grid-multimedia">
                        <h5>Upload Documents</h5>
                        <div className="grid">
                            <div className="block">
                                <h5>POT</h5>
                                <Image src="/no-img.jpg" alt="form-multimedia" width={200} height={200} />
                                <label htmlFor="pot-input">
                                    <input type="file" id='pot-input' accept='image/*' onChange={(e) => {
                                        if (e.target.files[0] !== undefined) e.target.parentNode.parentNode.children[1].setAttribute("srcset", window.URL.createObjectURL(e.target.files[0]));
                                    }} hidden /> Choose File
                                </label>
                            </div>
                            <div className="block">
                                <h5>PVS</h5>
                                <Image src="/no-img.jpg" alt="form-multimedia" width={200} height={200} />
                                <label htmlFor="pvs-input"><input type="file" id='pvs-input' onChange={(e) => {
                                    if (e.target.files[0] !== undefined) e.target.parentNode.parentNode.children[1].setAttribute("srcset", window.URL.createObjectURL(e.target.files[0]));
                                }} hidden /> Choose File</label>
                            </div>
                            <div className="block">
                                <h5>VISA</h5>
                                <Image src="/no-img.jpg" alt="form-multimedia" width={200} height={200} />
                                <label htmlFor="visa-input"><input type="file" id='visa-input' onChange={(e) => {
                                    if (e.target.files[0] !== undefined) e.target.parentNode.parentNode.children[1].setAttribute("srcset", window.URL.createObjectURL(e.target.files[0]));
                                }} hidden /> Choose File</label>
                            </div>
                            <div className="block">
                                <h5>Card</h5>
                                <Image src="/no-img.jpg" alt="form-multimedia" width={200} height={200} />
                                <label htmlFor="card-input"><input type="file" id='card-input' onChange={(e) => {
                                    if (e.target.files[0] !== undefined) e.target.parentNode.parentNode.children[1].setAttribute("srcset", window.URL.createObjectURL(e.target.files[0]));
                                }} hidden /> Choose File</label>
                            </div>
                        </div>
                    </div>
                    <div className="input">
                        <h5>Notes</h5>
                        <textarea></textarea>
                    </div>
                    <input type="submit" />
                </form>
            </div>
        </>
    )
}

export default page