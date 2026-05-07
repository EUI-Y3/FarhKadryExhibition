import React from 'react';
import { Link } from 'react-router-dom';
import star from './../../assets/star.svg'

import './button.css'
const Button = (props) => {
    return ( <>
    
        <button className={props.style1}>
        <Link id='link1' to={props.link} />
        <img className='starhover' src={star} alt="" />
        <h6>{props.cta}</h6>
        <img className='starhover' src={star} alt="" />
        </button>
    </> );
}
 
export default Button;<>

</>