import { X } from 'lucide-react'
import Image from 'next/image'
import React from 'react'

const ShipmentDetails = ({ setShipmentDetailsModal }) => {
    return (
        <div id='shipment-details'>
            <X className='exit' onClick={() => { setShipmentDetailsModal(false) }} />
            <div className="content">
                <h2>Shipment Details</h2>
                <div className="inside">
                    <div className="row">
                        <h3>Cars Shipment</h3>
                        <h4>ID : #12345678</h4>
                    </div>
                    <ul>
                        <li>Company: Marineoptim</li>
                        <li>Country: Pakistan</li>
                        <li>Hst no.: UDF123434</li>
                        <li>From: Karachi</li>
                        <li>Destination: Nagwar</li>
                        <li>Address: Ward no 09 Anabel Street house 09</li>
                        <li>Status: <span>Shipped</span></li>
                    </ul>
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
        </div>
    )
}

export default ShipmentDetails