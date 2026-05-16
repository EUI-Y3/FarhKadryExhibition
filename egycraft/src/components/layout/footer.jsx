import React from 'react';
import circle from './../../assets/circle1.svg'
import './footer.css'
import FatimaHand from '../common/fatimahand';
import IconText from '../common/icontextchip';
import sm1 from './../../assets/smIcon01.svg'
import sm2 from './../../assets/smIcon02.svg'
import sm3 from './../../assets/smicons201.png'
import sm4 from './../../assets/smicons202.png'
import sm5 from './../../assets/smicons203.png'

const Footer = () => {
    return ( <>
    <footer>
        <div className="animatedCircleCont">
            <div className="rectangle1"></div>
                <img src={circle} alt="" />
            </div>
    <FatimaHand />
   <div className="footerFlex">
     <IconText
                alt="email"
                icon={sm1}
                text="egycraft@add.com"
                style1="blues "
                />
                <IconText
                icon={sm2}
                alt="phone_no"
                text="+61 (0) 383 766 284"
                style1="blues"
                />
   </div>
                <p>

                    Level 13, 2 Mohamed Rami St,
Cairo, New Cairo, Egypt
                </p>
                <div className="smFlex">
                    <button>
                        <img className='footerSm' src={sm3} alt="" />
                    </button>
                     <button>
                        <img className='footerSm' src={sm4} alt="" />
                    </button>
                     <button>
                        <img className='footerSm' src={sm5} alt="" />
                    </button>
                </div>
                <h6>Created ny FM Studios. All rights reserved</h6>
    </footer>
    </> );
}
 
export default Footer;