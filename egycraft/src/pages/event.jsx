import React from 'react';
import { useState, useEffect } from 'react';
import './event.css'
import SeamlessScene from '../components/common/SeamlessScene';
import Model1 from '../components/common/model';
import './home.css'
import './../animations.css'
import hiwicon1 from './../assets/hiwIcon03.svg'
import hiwicon2 from './../assets/hiwIcon02.svg'
import hiwicon3 from './../assets/hiwIcon01.svg'

import illus1 from '../assets/horseillus1.svg'
import logodecor1 from '../assets/tashkil.svg'
import logodecor2 from '../assets/decor.svg'
import circle from '../assets/circle1.svg'
import MouseTrailSVG from '../components/common/MouseTrailSVG'
import mandala from '../assets/mandala1.svg'
import frame1 from '../assets/frame2.svg'
import sec2img from '../assets/sec2img.png'
import herologo from '../assets/herologo.svg'
import Header from '../components/layout/header';
import Button from '../components/common/button';
import HeadingBlock from '../components/common/heading';
import HowItWorks from '../components/common/hiw';
import HomeS2 from '../sections/homesec1';
import { supabase } from '../supabase';
const Event = () => {
    return ( <>
    <Header />
    {/* <SeamlessScene/> */}
    <main>
    <div className="secBg scalein2 ">
        <img src={frame1} alt=""  />
                {/* <div className="rectangle1"></div> */}

            </div>
    <div className="secContainer">
        {/* <div className="mask1"></div> */}
        <section className='section1 '>
            
        <div className="heroCont1">
            <img src={illus1} alt="fatima hand logo" />
            <HeadingBlock
            heading="Exhibition Details"
            style1="dark center decor"
            />
        </div>
    </section>
    </div>
    <div className="secContainer modelCont">
       <div className="detailsFlex">
        
       </div>
    </div>
    <div className="secContainer sec2Cont scrollAnimate2">
       <HomeS2 />
    </div>
       <div className="secContainer sec3Cont ">
     <section className='section2 section3'>
<div className="mandalaCont">
        <img className='mandala' src={mandala} alt="" />
</div>
        <div className="rightBlock">
        <HeadingBlock 
        style1="light left"
        heading="How It works"
        img={logodecor2}
         />
        <div className="hiwFlex">
        <HowItWorks
        icon ={hiwicon1}
        number="1"
        title="Browse our vendors and categories"
        desc="Explore upcoming and current Vendors across Egypt. Filter by location, date, and craft category to find events that match your interests."
        />
        <HowItWorks
        icon ={hiwicon2}
        number="2"
        title="Book Your Tickets"
        desc="Explore upcoming and current Vendors across Egypt. Filter by location, date, and craft category to find events that match your interests."
        />
        <HowItWorks
        icon ={hiwicon3}
        number="3"
        title="Attend the event seamlessly"
        desc="Explore upcoming and current Vendors across Egypt. Filter by location, date, and craft category to find events that match your interests."
        />
        </div>
        </div>
    </section>
   </div>
    </main>
    </> );
}
 
export default Event;