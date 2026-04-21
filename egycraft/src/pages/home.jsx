import React from 'react';
import SeamlessScene from '../components/common/SeamlessScene';
import './home.css'
import frame1 from '../assets/frame1.svg'
const Home = () => {
    return ( <>
<main>
    <SeamlessScene/>
<img className='scalein2' src={frame1} alt="" />
</main>


    </> );
}
 
export default Home;