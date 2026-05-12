import React from 'react';
import circle from './../../assets/circle1.svg'
import './footer.css'
import FatimaHand from '../common/fatimahand';
import IconText from '../common/icontextchip';
import sm1 from './../../assets/smicon01.png'
import sm2 from './../../assets/smicon02.png'
import sm3 from './../../assets/smicon03.png'
import sm4 from './../../assets/smicon04.png'
const Footer = () => {
    return ( <>
    <footer>
        <div className="animatedCircleCont">
            <div className="rectangle1"></div>
                <img src={circle} alt="" />
            </div>
    <FatimaHand />
    <IconText
                alt="email"
                icon={sm3}
                text="instagram"
                style1="grey"
                />
                <IconText
                icon={sm2}
                alt="instagram"
                text="instagram"
                style1="grey"
                />
    </footer>
    </> );
}
 
export default Footer;