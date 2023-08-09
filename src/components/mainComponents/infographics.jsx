import './infographics.css'
import truck from '../../assets/truck.gif'
import chimney from '../../assets/chimney.gif'
import tree from '../../assets/tree-f.gif'


function Info() {

    return (
        <>
            <div className='infoCont'>
                {/* Info 1 */}
                <div className='info back1'>
                    {/* Image */}
                    <div>
                        <img className='infoImg' src={truck} alt='Truck' />
                    </div>
                    {/* Text */}
                    <div className='infoText'>
                        <span className='big'>895.05</span> (tons)<br />
                        Standard Coal Saved
                    </div>
                </div>
                {/* Info 2 */}
                <div className='info back2'>
                    {/* Image */}
                    <div>
                        <img className='infoImg' src={chimney} alt='Truck' />
                    </div>
                    {/* Text */}
                    <div className='infoText'>
                        <span className='big'>1.06K</span> (tons)<br />
                        CO<sub>2</sub> avoided
                    </div>
                </div>
                {/* Info 3 */}
                <div className='info back3'>
                    {/* Image */}
                    <div>
                        <img className='infoImg' src={tree} alt='Truck' />
                    </div>
                    {/* Text */}
                    <div className='infoText'>
                        <span className='big'>1.45K</span><br />
                        Equivalent trees planted
                    </div>
                </div>
            </div>
        </>
    )
}

export default Info