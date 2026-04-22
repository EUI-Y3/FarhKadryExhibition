import React from 'react';
import { Link, useMatch } from 'react-router-dom';
import './navitem.css'
import star from './../../assets/star.svg'
const Navitem = (props) => {
    const isActive = useMatch(props.link);
    return ( <>
    <li className={`${props.style1} ${isActive ? "active" : ""}`}>
            <Link to={props.link} id="link">
                <img src={star} alt="" />
                {props.title}
                <img src={star} alt="" />
            
            </Link>
    </li>
    
    </> );
}
 
export default Navitem;