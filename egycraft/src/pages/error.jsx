import React from 'react';
import errormsg from './../assets/fillerIllus02.svg'
import decor from './../assets/pagedecor.svg'
import './error.css'
import HeadingBlock from '../components/common/heading';

const Error = () => {
    return ( <>
    <div className="secContainer">
        <section className='section2'>
            <img src={errormsg} alt="" />
            <img className='pageDecor float' src={decor} alt="" />
            <div>
                <HeadingBlock 
                heading="Opps!"
                subheading="sklklskl"
                style1="dark left"
                />
            </div>
        </section>
    </div>
    </> );
}
 
export default Error;