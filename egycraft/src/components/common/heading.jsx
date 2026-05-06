import React from 'react';
import img from './../../assets/decor.svg'
import './heading.css'
const HeadingBlock = (props) => {
    return (<>
    <div className={`headingBlock scaleIn scrollAnimate ${props.style1}`}>
        <h1>
{props.heading}
    </h1>
        <img className='scaleIn scrollAnimate2' src={img} alt="" />

    <h3 className='scaleIn scrollAnimate2'>
{props.subheading}
    </h3>
    </div>
    </>  );
}
 
export default HeadingBlock;