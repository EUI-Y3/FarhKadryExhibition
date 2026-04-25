import React from 'react';
import Navitem from '../common/navitem';
import './nav.css'
const Navigation = () => {
    return ( <>
    <ul>
            <Navitem style1="asideNav" title="Home" link="/" />
            <Navitem style1="asideNav" title="Exhibition details" link="exhibitiondetails" />

    </ul>
    </> );
}
 
export default Navigation;