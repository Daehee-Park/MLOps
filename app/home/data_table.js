import React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

export default function DataTable({ data }) {
    if (!data || data.length === 0) return null;

    const columns = Object.keys(data[0]);
    const maxRows = 500;
    const displayedData = data.slice(0, maxRows);

    return (
        <div className='flex flex-col w-fit overflow-x-auto overflow-y-auto max-h-96 mt-8'>
        <TableContainer component={Paper} className='max-w-screen-lg'>
            <Table stickyHeader>
                <TableHead>
                    <TableRow>
                        {columns.map((column, index) => (
                            <TableCell key={index} style={{ backgroundColor: '#e5e7eb' }}>{column}</TableCell>
                        ))}
                    </TableRow>
                </TableHead>
                <TableBody>
                    {displayedData.map((row, rowIndex) => (
                        <TableRow key={rowIndex}>
                            {columns.map((column, columnIndex) => (
                                <TableCell key={columnIndex}>{row[column]}</TableCell>
                            ))}
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </TableContainer>
        </div>
    );
}