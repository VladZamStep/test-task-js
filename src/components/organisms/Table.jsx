import React from 'react'
import { TableParams } from '../../common/consts/TableParams';
import TableRow from '../molecules/TableRow';

const Table = ({ products }) => {
    return (
        <div className="overflow-x-auto relative">
            <table className="w-full text-sm text-left dark:text-gray-400 table-fixed border-t rounded-3xl">
                <thead className="">
                    <tr>
                        {TableParams.map(({ name, text, width }) => (
                            <th className={`${width} py-5 text-sm`}
                                key={name}
                            >
                                {text}
                            </th>
                        ))}
                    </tr>
                </thead>
                <tbody>
                    {products?.map((row) => (
                        <TableRow
                            key={row.id}
                            row={row}
                        />
                    ))}
                </tbody>
            </table>
        </div>
    )
};

export default Table;