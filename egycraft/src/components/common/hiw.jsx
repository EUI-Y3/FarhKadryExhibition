import React from 'react';
import './hiw.css'
const HowItWorks = (props) => {
    return ( <>
    <div className="hiwListitem moveIn scrollAnimate2">
<div className="hiwHead scaleIn  scrollAnimate">
    <img src={props.icon} alt="" />
            <h1>
                {props.number}
            </h1>
</div>
<div className="hiwCont">
    <h4>
        {props.title}
    </h4>
    <p>{props.desc}</p>
</div>
    </div>
    </> );
}
 
export default HowItWorks;