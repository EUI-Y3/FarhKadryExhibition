import React from 'react';
import errormsg from './../assets/fillerIllus02.svg'
import decor from './../assets/pagedecor.svg'
import './error.css'
import HeadingBlock from '../components/common/heading';
import BlinkingEye from '../components/common/blinkingEye';
import Button from '../components/common/button';
import Header from '../components/layout/header';
import Preloader from '../components/layout/preloader';

const Error = () => {
    return ( <>
    <Header />
    <main className='body2'>
        <div className="secContainer">
        <section className='section2'>
            <div className="errormsg">
                <BlinkingEye />
            <img src={errormsg} alt="" />
            </div>
            <img className='pageDecor float' src={decor} alt="" />
            <div>
                <HeadingBlock 
                heading="Oops!"
                subheading="There is an error in your entries. Try Again."
                style1="dark left"
                />
                <Button
                style1="blue size2"
                cta=" Back home"
                link="/"
                />
            </div>
        </section>
    </div>
    </main>
    </> );
}
 
export default Error;