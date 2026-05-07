import React from 'react';
import { useState, useEffect } from 'react';
import ImageTrail from './../components/common/imageTrail'
// import {grid} from './../assets/grid.svg'
import './vendors.css'

import './event.css'
import SeamlessScene from '../components/common/SeamlessScene';
import './home.css'
import './../animations.css'
import heroillus from '../assets/decoricon01.svg'

import frame1 from '../assets/frame2.svg'
import Header from '../components/layout/header';
import Button from '../components/common/button';
import HeadingBlock from '../components/common/heading';
import Footer from '../components/layout/footer';
import Categories from '../sections/categories';
import VendorsSec from '../sections/vendorsSec';
import BlinkingEye from '../components/common/blinkingEye';
const Vendors = () => {
    return ( <>
    <Header />
    <SeamlessScene/>
    <main>
    <div className="secBg secBg2 scalein2 ">
        <img src={frame1} alt=""  />
            </div>
    <div className="secContainer">
        <section className='section1 '>
        <div className="heroCont1 eventSec1 fadeIn">
            <HeadingBlock
            heading="Our
Vendors"
            style1="dark center decor wrapped wrapped2"
            />
            <div className="vendorsTitleflex">
                <div className="illusCont scaleIn2">
                    <img className='spin' src={heroillus} alt='' aria-hidden="true" />
                </div>
                                <div className="illusCont scaleIn3">
                    <img className='spin' src={heroillus} alt='' aria-hidden="true" />
                </div>
                                <div className="illusCont scaleIn4">
                    <img className='spin' src={heroillus} alt='' aria-hidden="true" />
                </div>
            </div>
            <p className='vendorsSub'>
                Meet the makers behind Egypt's finest crafts. Discover their stories, explore their creations, and connect with artisans preserving ancestral traditions.
            </p>
        </div>
    </section>
    </div>
    <div className="secContainer modelCont catSec">
        <section className=''>
            <HeadingBlock 
        style1="dark center decor"
        heading="What our vendors sell"
        />
    <Categories />
        </section>
    </div>
   <div className="secContainer sec2Cont  modelCont mapCont">
    <section className='section2 mapSec'>
    <div className="map1 map2">
        <HeadingBlock 
        style1="dark center decor"
        heading="All Artisians"
        subheading="View our booths and find directions in 3D mode"
        />
        <VendorsSec />
    </div>
    </section>
   </div>
   <div className="secContainer sec3Cont galleryCont experienceSecCont">
     <section className='section2 eventGallery experienceSec carftmakerSec'>
        <div className="experienceCont carftmakerCont">
            <div className="hand2 scaleIn scrollAnimate">
                <BlinkingEye />
                
            </div>
            <HeadingBlock 
        style1="light center"
        heading="Are you a craftmaker?"
        />
        <h4 className='light fadeIn scrollAnimate2'>
            Join EgyCraft and showcase your work to thousands of craft enthusiasts across Egypt. Share your story, connect with buyers, and preserve our cultural heritage.
        </h4>
        <Button style1="blue size2 fadeIn scrollAnimate"  cta="Become a Vendor" />
        </div>

    </section>
   </div>
    </main>
    <Footer />
    </> );
}
 
export default Vendors;