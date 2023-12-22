import React from 'react';
import { ResponsiveBar } from '@nivo/bar';
import { useState, useEffect } from 'react';
import Spinner from './spinner';

export default function DistributionChart({ data }) {
    let isBinned = false;
    const [isLoading, setIsLoading] = React.useState(true);
    const [processedData, setProcessedData] = React.useState([]);

    useEffect(() => {
        // Helper function to bin numerical data
        const binData = (values, binCount) => {
            const filteredValues = values.filter(v => v !== undefined && v !== null);
            const max = Math.max(...filteredValues);
            const min = Math.min(...filteredValues);
            const binSize = (max - min) / binCount;
            let bins = Array.from({ length: binCount }, () => ({ count: 0, bin: '' }));
        
            filteredValues.forEach(value => {
            let binIndex = Math.floor((value - min) / binSize);
            binIndex = binIndex === binCount ? binCount - 1 : binIndex; // Handle edge case
            bins[binIndex].count++;
            });
        
            bins.forEach((_, index) => {
            const rangeStart = min + (index * binSize);
            const rangeEnd = index === binCount - 1 ? max : rangeStart + binSize;
            bins[index].bin = `${rangeStart.toFixed(0)}~${rangeEnd.toFixed(0)}`;
            });
        
            return bins;
        };

        // Process each column
        const processedData = Object.keys(data[0]).map(column => {
            const values = data.map(row => row[column]).filter(v => v !== undefined && v !== null);
            const uniqueValues = new Set(values);

            if (uniqueValues.size > 15) {
            return {
                column,
                data: binData(Array.from(uniqueValues), 8),
                isBinned: true
            };
            } else {
            return {
                column,
                data: Array.from(uniqueValues).map(value => ({
                bin: value.toString(),
                count: values.filter(v => v === value).length,
                isBinned: false
                }))
            };
            }
        });

        setProcessedData(processedData);
        setIsLoading(false);
    }, [data]);

    if (isLoading) return <Spinner />;

    return (
        <div className='chart-wrapper'>
        {processedData.map(({ column, data }, index) => (
            <div key={index} className='chart-container'>
                <span className='text-lg text-center'>{`${column} 분포`}</span>
                <ResponsiveBar
                    data={data}
                    keys={['count']}
                    indexBy="bin"
                    margin={{ top: 20, right: 20, bottom: 50, left: 20 }}
                    padding={isBinned ? 0.02 : 0.03}
                />
            </div>
        ))
        }
        </div>
    );
}