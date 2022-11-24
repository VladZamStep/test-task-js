const TableRow = ({ row }) => {
    return (
        <tr className='hover:cursor-pointer bg-white hover:bg-slate-100' >
            <td
                className='border-t align-middle text-xs py-5 text-left font-bold'
            >
                {row.id}
            </td>
            <td
                className='border-t align-middle text-xs py-5 text-left'
            >
                {row.title}
            </td>
            <td
                className='border-t align-middle text-xs py-5 text-left'
            >
                {row.price}
            </td>
            <td
                className='border-t align-middle text-xs py-5 text-left'
            >
                {new Date(row.date).toLocaleString()}
            </td>
        </tr>
    )
};

export default TableRow;