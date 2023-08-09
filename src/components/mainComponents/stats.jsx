import React from 'react';
import './stats.css';

function Stats() {
    let strokeWidth = 20;
    let radii = [100, 80, 60];
    let circumferences = radii.map(val => val * 2 * Math.PI);
    let percentages = [100, 87.73, 20.27];
    let strokeLength = circumferences.map((cir, index) => cir * percentages[index] / 100);
    console.log("circumferences", circumferences);
    console.log("strokeLength", strokeLength);
    return (
        <div className='stat-container'>
            {/* Stat 1 */}
            <div className='left-stat-container'>
                {/* Stat 1 chart */}
                <svg className='stat-1' height="220" width="220">
                    <circle className='rotation' cx="110" cy="110"
                        r={radii[0]} fill="none" stroke="#045097" strokeWidth="20"
                        strokeDasharray={`${strokeLength[0]},${circumferences[0]}`} />
                    <circle className='rotation' cx="110" cy="110"
                        r={radii[1]} fill="none" stroke="#60B8EE99" strokeWidth="20"
                        strokeDasharray={`${strokeLength[1]},${circumferences[1]}`} />
                    <circle className='rotation' cx="110" cy="110"
                        r={radii[2]} fill="none" stroke="#04509733" strokeWidth="20"
                        strokeDasharray={`${strokeLength[2]},${circumferences[2]}`} />
                    <text className="svg-text-up" x="87" y="110">Yield</text>
                    <text className="svg-text-down" x="94" y="125">KWH</text>
                </svg>
                {/* Stat 1 text */}
                <div className='left-text-container'>
                    {/* one */}
                    <div className='stat-info'>
                        <div className='ball color1'></div>
                        <div className='ball-text'>
                            <span className='value'>160.53 kWh</span><br />
                            <span className='normal'>Total - </span>
                            <span className='percent'>{percentages[0]}%</span>
                        </div>
                    </div>
                    {/* two */}
                    <div className='stat-info'>
                        <div className='ball color2'></div>
                        <div className='ball-text'>
                            <span className='value'>140.84 kWh</span><br />
                            <span className='normal'>Consumed - </span>
                            <span className='percent'>{percentages[1]}%</span>
                        </div>
                    </div>
                    {/* three */}
                    <div className='stat-info'>
                        <div className='ball color3'></div>
                        <div className='ball-text'>
                            <span className='value'>19.69 kWh</span><br />
                            <span className='normal'>Fed to Grid - </span>
                            <span className='percent'>{percentages[2]}%</span>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    );
}

export default Stats