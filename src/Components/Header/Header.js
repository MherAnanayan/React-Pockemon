import React from 'react';
import Logo from './pockemon.jpg'

import './Style.css'

const Header = () => {
    return (
        <div className='Header-area'>
            <img className='logo-stl' src={Logo} alt='Logo' ></img>
        </div>
    )
}


export default Header;