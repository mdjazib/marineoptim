"use client"
import React, { useState } from 'react'
import Table from '../components/Table';

const page = () => {
    const [rows, setRows] = useState([
        { id: 1, name: 'Alice', city: 'Lahore', charges: '200$', weight: '10kg', country: 'Pakistan', hst: '12345', status: 'Incomplete' },
        { id: 2, name: 'Bob', city: 'Karachi', charges: '150$', weight: '7kg', country: 'Pakistan', hst: '67890', status: 'In Transit' },
        { id: 3, name: 'Charlie', city: 'Multan', charges: '180$', weight: '9kg', country: 'Pakistan', hst: '54321', status: 'Canceled' },
        { id: 4, name: 'David', city: 'Islamabad', charges: '250$', weight: '12kg', country: 'Pakistan', hst: '11223', status: 'Shipped' },
        { id: 5, name: 'Emma', city: 'Peshawar', charges: '130$', weight: '6kg', country: 'Pakistan', hst: '99887', status: 'Canceled' },
        { id: 6, name: 'Faisal', city: 'Quetta', charges: '210$', weight: '11kg', country: 'Pakistan', hst: '45678', status: 'In Transit' },
    ]);
    return (
        <div className='archived'>
            <h2>Archived</h2>
            <div className="table">
                <h3>Recent Shipments</h3>
                <Table rows={rows} setRows={setRows} />
            </div>
        </div>
    )
}

export default page