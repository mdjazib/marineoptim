"use client"
import React, { useState } from 'react'
import Table from '../components/Table';
import { Check, Search, Target } from 'lucide-react';

const page = () => {
    const [rows, setRows] = useState([
        { id: 1, name: 'Elina', status: 'Incomplete' },
        { id: 2, name: 'John', status: 'Shipped' },
        { id: 3, name: 'Aliya', status: 'In Transit' },
        { id: 4, name: 'Zoya', status: 'Canceled' },
        { id: 5, name: 'Hamza', status: 'Incomplete' },
    ]);
    return (
        <div className='tracking'>
            <h2>Shipment Tracking</h2>
            <div className="block">
                <div className="row">
                    <h3>Disney Dress</h3>
                    <h4>#12345678</h4>
                </div>
                <div className="col">
                    <div className="process">
                        <div className="step">
                            <div className="ui"></div>
                            <div className="row">
                                <h5>Delivery</h5>
                            </div>
                        </div>
                        <div className="step">
                            <div className="ui"></div>
                            <div className="row">
                                <h5>Arrived</h5>
                            </div>
                        </div>
                        <div className="step">
                            <div className="ui -target"><Target /></div>
                            <div className="row">
                                <h5>In Way to Destination</h5>
                                <p>05-September-2024 03:56 pm</p>
                            </div>
                        </div>
                        <div className="step">
                            <div className="ui -target"><Target /></div>
                            <div className="row">
                                <h5>Ready to ship</h5>
                                <p>05-September-2024 03:56 pm</p>
                            </div>
                        </div>
                        <div className="step">
                            <div className="ui -checked"><Check /></div>
                            <div className="row">
                                <h5>Shipment Collected</h5>
                                <p>05-September-2024 03:56 pm</p>
                            </div>
                        </div>
                        <div className="step">
                            <div className="ui -checked"><Check /></div>
                            <div className="row">
                                <h5>Shipment Confirmed</h5>
                                <p>05-September-2024 03:56 pm</p>
                            </div>
                        </div>
                    </div>
                    <div className="table">
                        <h2>Ongoing Shipments </h2>
                        <div className="search">
                            <Search />
                            <input type="search" placeholder='Search...' />
                        </div>
                        <Table rows={rows} setRows={setRows} drag={false} />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default page