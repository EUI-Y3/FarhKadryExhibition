import React, { useState, useEffect } from 'react';
import './preloader.css';
import HeadingBlock from '../common/heading';
import illustration from './../../assets/popupicon.svg'
import star from './../../assets/star.svg'
import close1 from './../../assets/close.svg'


import '../common/button.css';
import Button from '../common/button';

const PopUp = () => {
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const timer = setTimeout(() => {
            setIsVisible(true);
        }, 8000);

        return () => clearTimeout(timer);
    }, []);

    if (!isVisible) return null;

    return (
        <div className="popUp">
            <button onClick={() => setIsVisible(false)} className='size1 beige closeBtn'><img src={close1} alt="" /></button>
            <div className="popUpMsg">
                <img className='popupicon' src={illustration} alt="" />
                <HeadingBlock 
                    heading="Limited Time Offer!"
                    subheading="Book your tickets within this week to get 50% off!"
                    style1="light center wrapped"
                />
                <div className="btnFlex">
                    <Button style1="size1 blue" cta="Book my ticket" link="/booking" />
                    <button className="size1 beige" onClick={() => setIsVisible(false)}>
                        <img src={star} alt="" />
                        <h6>Close Ad</h6>
                        <img src={star} alt="" />
                    </button>
                </div>
            </div>          
        </div>
    );
}
 
export default PopUp;