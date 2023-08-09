import './nav.css'
import files from '../assets/files.png'
import people from '../assets/People Icon.png'
import tool from '../assets/Tools Icon.png'
import arrow from '../assets/Arrow Icon.png'

function Nav () {
    return (
        <>
            <div className='nav'>
                {/* Files */}
                <img className='mouse-hover' src={files} alt='Files' />
                {/* Files */}
                <img className='mouse-hover' src={people} alt='Files' />
                {/* Files */}
                <img className='mouse-hover' src={tool} alt='Files' />
                {/* Files */}
                <img className='mouse-hover' src={arrow} alt='Files' />
            </div>
        </>
      )
}

export default Nav;