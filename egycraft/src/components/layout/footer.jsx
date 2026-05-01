import React from 'react';
import circle from './../../assets/circle1.svg'
import './footer.css'
import FatimaHand from '../common/fatimahand';
const Footer = () => {
    return ( <>
    <footer>
        <div className="animatedCircleCont">
            <div className="rectangle1"></div>
                <img src={circle} alt="" />
            </div>
    <FatimaHand />
    </footer>
    </> );
}
 
export default Footer;