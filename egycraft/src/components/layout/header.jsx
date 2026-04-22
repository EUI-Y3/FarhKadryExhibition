import React from 'react';
import { Link } from 'react-router-dom';
import './header.css'
import Navigation from './nav';
import logo1 from './../../assets/logoheader.svg'
import headerbg from './../../assets/headerleft.png'
import headerbg2 from './../../assets/headerright.png'

const Header = () => {
    return ( <>
    <div className="headerCont">
        <header>
            <img className='headerBg' src={headerbg2} alt="" />
            <img className='headerBg headerBg2' src={headerbg} alt="" />
        <img className='logo' src={logo1} alt="fatima hand logo" />
        <Navigation />
    </header>
    </div>
    </> );
}
 
export default Header;