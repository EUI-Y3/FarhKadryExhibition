import React from 'react';
import { Link } from 'react-router-dom';
import './header.css'
import Navigation from './nav';
import logo1 from './../../assets/logoheader.svg'
import headerbg from './../../assets/headerleft.png'
import headerbg2 from './../../assets/headerright.png'
import Button from '../common/button';

const Header = () => {
    return ( <>
    <div className="headerCont">
        <header>
            <img className='headerBg' src={headerbg2} alt="" />
            <img className='headerBg headerBg2' src={headerbg} alt="" />
        <img className='logo' src={logo1} alt="fatima hand logo" />
        <Navigation />
        <Button style1="size1 blue" cta="Book my ticket" link="/booking" />
    </header>
    </div>
    </> );
}
 
export default Header;