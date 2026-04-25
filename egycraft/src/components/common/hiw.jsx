import React from 'react';
const HowItWorks = (props) => {
    return ( <>
    <div className="hiwListitem">
<div className="hiwHead">
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