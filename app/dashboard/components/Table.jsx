'use client';
import { Equal } from 'lucide-react';
import { useEffect, useRef, useState } from 'react';
import { ReactSortable } from 'react-sortablejs';

const Table = ({ rows, setRows, drag = true }) => {
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
            {width > 700 ? <td><Equal /></td> : <></>}
        </tr >
    ));
    return (
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
                    {width > 700 ? <th></th> : <></>}
                </tr>
            </thead>
            {
                width > 700 && drag ? <ReactSortable tag="tbody" list={rows} setList={setRows}>{renderRows()}</ReactSortable> : <>{renderRows()}</>
            }
        </table>
    );
};

export default Table;
