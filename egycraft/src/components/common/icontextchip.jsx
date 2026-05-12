import React from 'react';
import './icontextchip.css'
const IconText = (props) => {
    return ( <>
    <div className="iconTextChip">
        <img src={props.icon} alt={props.alt} />
        <h6 className={props.style1}>
{props.text}
        </h6>
    </div>
    
    </> );
}
 
export default IconText;