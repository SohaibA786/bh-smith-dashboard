import logo from '../assets/logo.png'
import notification from '../assets/bell.svg'
import avatar from '../assets/avatar.svg'
import './header.css'

function Header() {

    return (
        <>
            <header className='header'>
                {/* logo */}
                <div>
                    <img className='logo' src={logo} alt='Logo' />
                </div>
                {/* profile & notifications */}
                <div className='header-right'>
                    <img className='bell-size' src={notification} alt='Notification Logo' />
                    <img  src={avatar} alt='Notification Logo' />
                </div>
            </header>
        </>
    )
}

export default Header