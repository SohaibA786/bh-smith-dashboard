import React from 'react';
import './stats.css';

function Stats() {
    let strokeWidth = 15;
    let radii = [80, 65, 50];
    let [cx, cy] = [90, 90];
    let circumferences = radii.map(val => val * 2 * Math.PI);
    let percentages = [100, 87.73, 20.27];
    let strokeLength = circumferences.map((cir, index) => cir * percentages[index] / 100);
    console.log("circumferences", circumferences);
    console.log("strokeLength", strokeLength);
    return (
        <div className='stat-container'>
            {/* Stat 1 */}
            <div className='left-stat-container'>
                <div className='stat-bg'></div>
                {/* Stat 1 chart */}
                <svg className='stat-1' height="180" width="180">
                    <circle className='rotation' cx={cx} cy={cy}
                        r={radii[0]} fill="none" stroke="#045097" strokeWidth={strokeWidth}
                        strokeDasharray={`${strokeLength[0]},${circumferences[0]}`} />
                    <circle className='rotation' cx={cx} cy={cy}
                        r={radii[1]} fill="none" stroke="#60B8EE99" strokeWidth={strokeWidth}
                        strokeDasharray={`${strokeLength[1]},${circumferences[1]}`} />
                    <circle className='rotation' cx={cx} cy={cy}
                        r={radii[2]} fill="none" stroke="#04509733" strokeWidth={strokeWidth}
                        strokeDasharray={`${strokeLength[2]},${circumferences[2]}`} />
                    <text className="svg-text-up" x="67" y="89">Yield</text>
                    <text className="svg-text-down" x="75" y="105">KWH</text>
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
            {/* Stat 2 */}
            <div className='right-stat-container'>
            <div className='stat-bg'></div>
                <div className='one-text left'>
                    <div className='a'>
                        <span className='b'>125.96</span> kWh<br />From PV
                    </div>
                    <div className='c'>
                        (52.40%)
                    </div>
                </div>
                <svg className='stat-1' height="180" width="180">
                    <circle cx={cx} cy={cy}
                        r={radii[0]} fill="none" stroke="rgba(205,212,217,0.5)" strokeWidth={strokeWidth}
                        strokeDasharray={`${strokeLength[0]},${circumferences[0]}`} />
                    <circle className='rotation2' cx={cx} cy={cy}
                        r={radii[0]} fill="none" stroke="#E58C2B" strokeWidth={strokeWidth}
                        strokeDasharray={`326.7,${circumferences[0]}`} />
                    <circle className='rotation2' cx={cx} cy={cy}
                        r="63" fill="none" stroke="#CDD4D988" strokeWidth="2" />
                    <text className="svg-text" x="37" y="97">Consumption</text>
                </svg>
                <div className='one-text right'>
                    <div className='a'>
                        <span className='b'>114.40</span> kWh<br />From Grid
                    </div>
                    <div className='c'>
                        (47.60%)
                    </div>
                </div>
            </div>
        </div>
    );
}


export default Stats