import './nav.css'
import files from '../assets/files.png'

function Nav () {
    return (
        <>
            <div className='nav'>
                {/* Files */}
                <img src={files} alt='Files' />
                {/* Files */}
                <img src={files} alt='Files' />
                {/* Files */}
                <img src={files} alt='Files' />
                {/* Files */}
                <img src={files} alt='Files' />
            </div>
        </>
      )
}

export default Nav;