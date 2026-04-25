import React from 'react';
import './heading.css'
const HeadingBlock = (props) => {
    return (<>
    <div className={props.style1}>
        <img src={props.img} alt="" />
        <h1>
{props.heading}
    </h1>
    <h2>
{props.subheading}
    </h2>
    </div>
    </>  );
}
 
export default HeadingBlock;