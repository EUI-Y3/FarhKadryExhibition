import React from 'react';
import errormsg from './../assets/fillerIllus02.svg'
import decor from './../assets/pagedecor.svg'
import './error.css'
import HeadingBlock from '../components/common/heading';
import BlinkingEye from '../components/common/blinkingEye';

const Error = () => {
    return ( <>
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
            </div>
        </section>
    </div>
    </main>
    </> );
}
 
export default Error;