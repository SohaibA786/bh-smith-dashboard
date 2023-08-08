import logo from '../assets/logo.png'
import notification from '../assets/notification.png'
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
                    <img src={notification} alt='Notification Logo' />
                    <img src={avatar} alt='Notification Logo' />
                </div>
            </header>
        </>
    )
}

export default Header