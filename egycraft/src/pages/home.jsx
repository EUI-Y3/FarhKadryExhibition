import React from 'react';
import SeamlessScene from '../components/common/SeamlessScene';
import Model1 from '../components/common/model';

import './home.css'
import logoicon from '../assets/logo2.svg'
import logodecor1 from '../assets/tashkil.svg'
import logodecor2 from '../assets/decor.svg'
import frame1 from '../assets/frame2.svg'
import herologo from '../assets/herologo.svg'
import Header from '../components/layout/header';
const Home = () => {
    return ( <>
    <Header />
    <main>
    <SeamlessScene/>
    <div className="secContainer">
        {/* <div className="mask1"></div> */}
        <section className='section1 '>
            <div className="secBg scalein2 ">
        <img src={frame1} alt=""  />
                {/* <div className="rectangle1"></div> */}

            </div>
        <div className="heroCont1">
            <div className="logoicon">
            <img src={logoicon} alt="fatima hand logo" />
            </div>
            <div className="logoCont">
            <img className='logodecor1' src={logodecor1} alt="" />
            <img src={herologo} alt="Egycraft ايجي كرافت" />
            <img className='logodecor2' src={logodecor2} alt="" />
        </div>
        <h3>Discover The Craft of Egypt</h3>
        </div>
        <div className="heroCont2">
            <Model1 />
        </div>
    </section>
    </div>
    </main>


    </> );
}
 
export default Home;