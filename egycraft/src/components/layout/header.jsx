import React from 'react';
import { useState, useEffect } from 'react';

import './header.css'
import Navigation from './nav';
import logo1 from './../../assets/logoheader.svg'
import headerbg from './../../assets/headerleft.png'
import headerbg2 from './../../assets/headerright.png'
import Button from '../common/button'
import burger from './../../assets/burgermenu.svg'
import close from './../../assets/close.svg'
import './../layout/popup.css'

const Header = () => {
    const [isOpen, setIsOpen] = useState(false);
    const openPopup = () => setIsOpen(true);
    const closePopup = () => setIsOpen(false);

    return ( <>
    <div className="headerCont">
        <header>
            <img className='headerBg' src={headerbg2} alt="" />
            <img className='headerBg headerBg2' src={headerbg} alt="" />
        <img className='logo' src={logo1} alt="fatima hand logo" />
        <div className="navCont2">
            <Navigation />
        </div>
        <Button style1="size1 blue" cta="Book my ticket" link="/booking" />
        <button aria-label="Menu" aria-expanded="false" aria-controls="menu-list" className="btn3 burgermenu" onClick={openPopup}>
                            <img  src={burger} alt="menu" />
                        </button>
    </header>
    </div>
     {/* MOBILE POPUP */}
            <div className={`popUp ${isOpen ? "show" : "hide"}`}>
                <div>
                    <ul className="burgernav">
                        <Navigation />
                    </ul>

                    {/* CLOSE BUTTON */}
                    <button className="btn3 closed" onClick={closePopup}>
                        <img src={close} alt="close"  />
                    </button>
                </div>
            </div>
    </> );
}
 
export default Header;