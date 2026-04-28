import React from 'react';
import img from './../../assets/decor.svg'
import './heading.css'
const HeadingBlock = (props) => {
    return (<>
    <div className={`headingBlock ${props.style1}`}>
        <h1>
{props.heading}
    </h1>
        <img src={img} alt="" />

    <h3>
{props.subheading}
    </h3>
    </div>
    </>  );
}
 
export default HeadingBlock;