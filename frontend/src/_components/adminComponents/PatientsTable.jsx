// import React from 'react'

// const PatientsTable = () => {
//   return (
//     <div>PatientsTable</div>
//   )
// }

// export default PatientsTable
import React from 'react';
import { useTable } from 'react-table';
import { Link } from 'react-router-dom';

const PatientsTable = ({ data, handleBlock }) => {
    // handle
    const columns = React.useMemo(
        () => [
            {
                Header: '#',
                accessor: 'rowNumber',
                Cell: ({ row }) => <div>{row.index + 1}</div>,
            },
            {
                Header: 'FirstName',
                accessor: 'fname', // accessor is the "key" in the data object
            },
            {
                Header: 'LastName',
                accessor: 'lname',
            },
            {
                Header: 'Email',
                accessor: 'email',
            },
            {
                Header: 'Mobile',
                accessor: 'mobile',
            },
            {
                Header: 'Action',
                accessor: '_id',
                Cell: ({ row }) => (
                    <button
                        className={`inline-block rounded ${row.original.blocked ? 'bg-primary' : 'bg-red-400'} px-6 pb-2 pt-2.5 text-xs font-medium uppercase leading-normal text-white shadow-sm transition duration-150 ease-in-out 
                        ${row.original.blocked ? 'hover:bg-primary-600' : 'hover:bg-red-600'} hover:shadow-sm focus:outline-none focus:ring-0 ${row.original.blocked ? 'active:bg-primary-700' : 'active:bg-res-700'} active:shadow-sm`}
                        onClick={() => handleBlock(row.original._id)}
                    >{`${row.original.blocked ? 'UnBlock' : 'Block'}`}</button>
                )
            },
        ],
        []
    );

    const {
        getTableProps,
        getTableBodyProps,
        headerGroups,
        rows,
        prepareRow,
    } = useTable({ columns, data });

    return (
        <div className='overflow-x-auto  p-10'>
            <table {...getTableProps()} className='text-center w-full table-auto shadow-lg bg-white'>
                <thead>
                    {headerGroups.map((headerGroup) => (
                        <tr {...headerGroup.getHeaderGroupProps()} style={{ borderBottom: '1px solid black' }}>
                            {headerGroup.headers.map((column) => (
                                <th {...column.getHeaderProps()} className='bg-primary-500 border text-left px-8 py-4'>
                                    {column.render('Header')}
                                </th>
                            ))}
                        </tr>
                    ))}
                </thead>
                <tbody {...getTableBodyProps()}>
                    {rows.map((row) => {
                        prepareRow(row);
                        return (
                            <tr {...row.getRowProps()} className='even:bg-primary-100'>
                                {row.cells.map((cell) => (
                                    <td {...cell.getCellProps()} className='border-2 px-8 py-4'>
                                        {cell.render('Cell')}
                                    </td>
                                ))}
                            </tr>
                        );
                    })}
                </tbody>
            </table>
        </div>
    )

}

export default PatientsTable;
