'use client';
import { Equal } from 'lucide-react';
import { useEffect, useRef, useState } from 'react';
import ShipmentDetails from '../modal/ShipmentDetails';

const Table = ({ rows, setRows, drag = true }) => {
    const table = useRef();
    const [width, setWidth] = useState(0);
    const [shipmentDetailsModal, setShipmentDetailsModal] = useState(false);

    useEffect(() => {
        if (!table.current) return;
        const observer = new ResizeObserver(entries => {
            for (let entry of entries) {
                setWidth(entry.contentRect.width);
            }
        });
        observer.observe(table.current);
        return () => observer.disconnect();
    }, []);

    const renderRows = () => rows.map((row, i) => (
        <tr key={row.id}>
            {
                width > 700 ?
                    Object.entries(rows[i]).slice(0, Object.entries(rows[i]).length - 2).map((e, i) => (
                        <td key={i} >{e[0] === "status" ? < span className={row.status.toLowerCase().replace(" ", "-")}>{row.status}</span> : e[1]}</td>
                    )) :
                    Object.entries(rows[i]).slice(0, Object.entries(rows[i]).length - 0).map((e, i) => (
                        <td key={i} >{e[0] === "status" ? < span className={row.status.toLowerCase().replace(" ", "-")}>{row.status}</span> : e[1]}</td>
                    ))
            }
            <td onClick={() => setShipmentDetailsModal(true)}><Equal /></td>
        </tr >
    ));
    return (
        <>
            {shipmentDetailsModal ? <ShipmentDetails setShipmentDetailsModal={setShipmentDetailsModal} /> : <></>}
            <table className='-data-table' ref={table}>
                <thead>
                    <tr>
                        {
                            width > 700 ?
                                Object.keys(rows[0]).slice(0, Object.keys(rows[0]).length - 2).map((e, i) => (
                                    <th key={i} >{e}</th>
                                )) :
                                Object.keys(rows[0]).slice(0, Object.keys(rows[0]).length - 0).map((e, i) => (
                                    <th key={i} >{e}</th>
                                ))
                        }
                        <th></th>
                    </tr>
                </thead>
                {renderRows()}
            </table>
        </>
    );
};

export default Table;
