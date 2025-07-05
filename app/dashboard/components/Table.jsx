'use client';
import { Equal } from 'lucide-react';
import { useEffect, useRef, useState } from 'react';
import { ReactSortable } from 'react-sortablejs';

const Table = ({ rows, setRows }) => {
    const table = useRef();
    const [width, setWidth] = useState(0);

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

    const renderRows = () => rows.map((row) => (
        <tr key={row.id}>
            <td>{row.id}</td>
            <td>{row.name}</td>
            <td>{row.city}</td>
            <td>{row.charges}</td>
            <td>{row.weight}</td>
            <td>{row.country}</td>
            <td>{row.hst}</td>
            <td><span className={row.status.toLowerCase().replace(" ", "-")}>{row.status}</span></td>
            {width > 700 ? <td><Equal /></td> : <></>}
        </tr>
    ));

    return (
        <table className='-data-table' ref={table}>
            <thead>
                <tr>
                    <th>#</th>
                    <th>Name</th>
                    <th>City</th>
                    <th>Charges</th>
                    <th>Weight</th>
                    <th>Country</th>
                    <th>Hst.no</th>
                    <th>Status</th>
                    {width > 700 ? <th></th> : <></>}
                </tr>
            </thead>
            {
                width > 700 ? <ReactSortable tag="tbody" list={rows} setList={setRows}>{renderRows()}</ReactSortable> : renderRows()
            }
        </table>
    );
};

export default Table;
