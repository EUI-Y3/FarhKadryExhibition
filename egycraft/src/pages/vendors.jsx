import React from 'react';
import { useState, useEffect } from 'react';
import ImageTrail from './../components/common/imageTrail'
// import {grid} from './../assets/grid.svg'
import './vendors.css'

import './event.css'
import SeamlessScene from '../components/common/SeamlessScene';
import Model1 from '../components/common/model';
import './home.css'
import './../animations.css'
import locIcon from '../assets/locationicon.svg'
import heroillus from '../assets/decoricon01.svg'
import logodecor1 from '../assets/tashkil.svg'
import logodecor2 from '../assets/decor.svg'
import circle from '../assets/circle1.svg'
import category1 from '../assets/category1.png'
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
import CountdownTimer from '../sections/countdown';
import ExhibitionMap from '../sections/ExhibitionMap';
import Footer from '../components/layout/footer';
import FAQ from '../sections/faq';
import Categories from '../sections/categories';
const Vendors = () => {
    const [trailKey, setTrailKey] = useState(0);
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
    <div className="map1">
        <div className="mapLeft">
            <HeadingBlock 
        style1="dark left"
        heading="Getting There"
        />
        <div className="mapAddress"> 
            <img src={locIcon} alt="location icon" />
            <div>
                <h3>Address</h3>
                    <p>
                        Cairo International Convention Center
                        El-Nasr Road, Nasr City, Cairo Governorate
                    </p>
            </div>
        </div>
        </div>
        <div className='firstMap' >
          <iframe
            title="Cairo International Convention Center map"
            frameBorder="0"
            scrolling="no"
            marginHeight="0"
            marginWidth="0"
            src="https://www.google.com/maps/embed/v1/place?key=AIzaSyBVizdQeh3udy11xDc5Ao2YStR2gLc-rfc&amp;q=El-Nasr%20Road%2C%20Nasr%20City%2C%20Cairo%20Governorate&amp;maptype=roadmap&amp;zoom=14"
          >
            <a href="https://www.mapsdirections.info/pl/mapa-populacji/">Check Location</a>
          </iframe>
        </div>
    </div>
    <div className="map1 map2">
        <HeadingBlock 
        style1="dark left"
        heading="Exhbition Map"
        subheading="View our booths and find directions in 3D mode"
        />
<ExhibitionMap />    
    </div>
    </section>
   </div>
   <div className="secContainer sec3Cont galleryCont experienceSecCont">
     <section className='section2 eventGallery experienceSec'>
        <div className="mandalaCont mandalaCont2">
        <img aria-hidden="true" className='mandala' src={mandala} alt="" />
        </div>
        <div className="experienceCont">
            <HeadingBlock 
        style1="light center decor"
        heading="Don’t Miss The Experience."
        />
        <h4 className='light'>
            Secure your spot at Egypt's most anticipated craft celebration. Limited early bird tickets available.
        </h4>
        <Button style1="blue size2"  cta="Book my ticket" />
        </div>
        <div className="mandalaCont mandalaCont2">
        <img aria-hidden="true" className='mandala mandala2' src={mandala} alt="" />
        </div>
    </section>
   </div>
    </main>
    <Footer />
    </> );
}
 
export default Vendors;