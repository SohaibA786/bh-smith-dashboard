import './infographics.css'


function Info() {

    return (
        <>
            <div className='infoCont'>
                {/* Info 1 */}
                <div className='info back1'>
                    {/* Image */}
                    <div style={{ position: "relative", width: "79px" }}>
                        <lottie-player src="https://lottie.host/57666718-3877-44d2-bdb6-bcc2f6799d41/xuw9pOQ6uL.json" background="transparent" speed="1" style={{ position: "absolute", bottom: "-49px", width: "79px", height: "79px" }} loop autoplay></lottie-player>
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
                    <div style={{ position: "relative", width: "79px" }}>
                        <lottie-player lottie-player src="https://lottie.host/0d1969a1-a5fb-4a21-a3ae-ab71a85e8b0e/wTrkqV768k.json" background="transparent" speed="1" style={{ position: "absolute", bottom: "-25px", width: "79px", height: "79px" }} loop autoplay>
                        </lottie-player>
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
                    <div style={{ position: "relative", width: "79px" }}>
                        <lottie-player lottie-player src="https://lottie.host/8f72ad94-a448-41e7-920e-6515475cdc3a/cmWcU61wdR.json" background="transparent" speed="1" style={{ position: "absolute", bottom: "-45px", left: "0px", width: "90px", height: "90px" }} loop autoplay>
                        </lottie-player>
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