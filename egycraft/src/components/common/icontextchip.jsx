import React from 'react';

const IconText = (props) => {
    return ( <>
    <div className="iconTextChip">
        <img src={props.icon} alt="" />
        <h6 className={props.style1}>

        </h6>
    </div>
    
    </> );
}
 
export default IconText;