import React from 'react';
import detailicon1 from './../assets/eventicon01.svg'
import detailicon2 from './../assets/eventicon02.svg'
import detailicon3 from './../assets/eventicon03.svg'
import detailicon4 from './../assets/eventicon04.svg'
import './../pages/event.css'
import Detail from '../components/common/detailCard';
const ExhibitionDetails = () => {
    return ( <>
    <div className="detailsFlex moveIn scrollAnimate">
        <Detail
        icon={detailicon2}
        style1="cardBlue moveIn"
        title= "Time"
        desc="March 15-20, 2026"
        desc2="6 days of craft"
        />
        <Detail
        icon={detailicon3}
        style1="cardPink tilt1"
        title= "Dates"
        desc="March 15-20, 2026"
        desc2="6 days of craft"
        />
        <Detail
        icon={detailicon4}
        style1="cardBlue tilt2"
        title= "Location"
        desc="March 15-20, 2026"
        desc2="6 days of craft"
        />
        <Detail
        icon={detailicon1}
        style1="cardPink"
        title= "Tickets"
        desc="250 EGP"
        desc2="6 days of craft"
        />
    </div>
    </> );
}
 
export default ExhibitionDetails;