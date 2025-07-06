import { CircleCheckBig, X } from 'lucide-react'
import Image from 'next/image'
import React from 'react'

const ShipmentConfirmed = ({ setShipmentConfirmedModal }) => {
    return (
        <div id='shipment-confirmed'>
            <div className="style-1"></div>
            <div className="style-2"></div>
            <X className='exit' onClick={() => { setShipmentConfirmedModal(false) }} />
            <div className="content">
                <div className="check">
                    <CircleCheckBig />
                </div>
                <h2>Shipment Confirmed</h2>
                <div className="samples">
                    <div className="block">
                        <h2>POT</h2>
                        <Image src="/sample.png" alt="Sample" width={100} height={150} />
                    </div>
                    <div className="block">
                        <h2>PVS</h2>
                        <Image src="/sample.png" alt="Sample" width={100} height={150} />
                    </div>
                    <div className="block">
                        <h2>PVS</h2>
                        <Image src="/sample.png" alt="Sample" width={100} height={150} />
                    </div>
                </div>
                <div className="ctagrp">
                    <button>Export CSV</button>
                    <button className='-fill'>Download PDF</button>
                </div>
            </div>
        </div>
    )
}

export default ShipmentConfirmed