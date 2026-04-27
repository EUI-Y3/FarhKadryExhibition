import React from 'react';
import { useState, useEffect } from 'react';
import ImageTrail from './../components/common/imageTrail'

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
import ExhibitionDetails from '../sections/eventDetails';
const Event = () => {
    const [trailKey, setTrailKey] = useState(0);
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
        <ExhibitionDetails />
    </div>
    <div className="secContainer sec2Cont scrollAnimate2">
       <HomeS2 />
    </div>
       <div className="secContainer sec3Cont ">
     <section className='section2 section3'>

<div style={{ height: '500px', position: 'relative', overflow: 'hidden'}}>
  <ImageTrail
    key={trailKey}
    items={[
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSM3IODnlm7IJ9sgoh9oNaHXx-tbLMK8vDXmQ&s',
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSM3IODnlm7IJ9sgoh9oNaHXx-tbLMK8vDXmQ&s',
      'https://picsum.photos/id/1025/300/300',
      'https://picsum.photos/id/1026/300/300',
      'https://picsum.photos/id/1027/300/300',
      'https://picsum.photos/id/1028/300/300',
      'https://picsum.photos/id/1029/300/300',
      'https://picsum.photos/id/1030/300/300',
      // ...
    ]}
    variant="3"
  />
</div>
    </section>
   </div>
    </main>
    </> );
}
 
export default Event;