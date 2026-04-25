import React from 'react';
import mandala from './../../assets/mandala1.svg'
import './detailCard.css'
const Detail = (props) => {
    return ( <>
    <div className={`detailCard ${props.style1}`}>
        <img className='detailicon' src={props.icon} alt={props.iconDesc} />
        <h3>
            {props.title}
        </h3>
        <h6>{props.desc}</h6>
        <h6>{props.desc2}</h6>
        <img className='mandala' src={mandala} alt="" />
    </div>
    </> );
}
 
export default Detail;