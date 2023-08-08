import React from 'react';
import { RadialBarChart, RadialBar } from 'recharts';
import './stats.css';

function Stats() {
    // Sample data
    const data = [
        { name: 'A', x: 12.27, fill: "green" },
        { name: 'B', x: 87, fill: "yellow" },
        { name: 'C', x: 100, fill: "aqua" },
    ];


    return (
        <RadialBarChart width={500} height={500} data={data}>
            <RadialBar minAngle={15} dataKey="x" />
        </RadialBarChart>
    );
}

export default Stats