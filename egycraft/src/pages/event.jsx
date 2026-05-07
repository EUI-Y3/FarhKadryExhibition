import React from 'react';
import { MapContainer, TileLayer, Marker } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import { useState, useEffect } from 'react';
import L from 'leaflet';

import ImageTrail from './../components/common/imageTrail'
// import {grid} from './../assets/grid.svg'

import './event.css'
import SeamlessScene from '../components/common/SeamlessScene';
import Model1 from '../components/common/model';
import './home.css'
import './../animations.css'
import locIcon from '../assets/locationicon.svg'

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
import CountdownTimer from '../sections/countdown';
import ExhibitionMap from '../sections/ExhibitionMap';
import Footer from '../components/layout/footer';
import FAQ from '../sections/faq';
import Preloader from '../components/layout/preloader';
const Event = () => {
    const [trailKey, setTrailKey] = useState(0);

//     const starIcon = L.divIcon({
//   className: '',
//   html: `
//     <div style="
//       background: #e8472a;
//       width: 36px;
//       height: 36px;
//       border-radius: 8px;
//       display: flex;
//       align-items: center;
//       justify-content: center;
//       font-size: 20px;
//       box-shadow: 0 2px 6px rgba(0,0,0,0.3);
//     ">⭐</div>
//   `,
//   iconSize: [36, 36],
//   iconAnchor: [18, 18],
// });
    return ( <>
    <Preloader />
    <Header />
    <SeamlessScene/>
    <main>
    <div className="secBg secBg2 scalein2 ">
        <img src={frame1} alt=""  />
            </div>
    <div className="secContainer">
        <section className='section1 fadeIn '>
        <div className="heroCont1 eventSec1 ">
            <img
            className='heroimg scaleIn2'
            src={illus1} alt="decorative illustartion of an egyptian floklore  horse" />
            <HeadingBlock
            heading="Exhibition Details"
            style1="dark center decor"
            />
        </div>
    </section>
    </div>
    <div className="secContainer modelCont cardsSec">
        <ExhibitionDetails />
        
        <CountdownTimer />
    </div>
    
       <div className="secContainer sec3Cont galleryCont">
     <section className='section2 eventGallery'>
        <HeadingBlock 
        style1="light center decor"
        heading="Our Gallery"
        subheading ="Hover to reveal!"
        />
<div style={{ height: '500px', position: 'relative', overflow: 'hidden'}}>
  <ImageTrail
    key={trailKey}
    items={[
      'https://i.pinimg.com/1200x/4a/dd/7e/4add7e6985caeffe31364c772e2ab20f.jpg',
      'https://i.pinimg.com/736x/bf/83/bf/bf83bfc5dc7ccea47985f8aadbdcb082.jpg',
      'https://i.pinimg.com/1200x/c1/bc/b3/c1bcb349a3cb1af0d78a51a1d5321320.jpg',
      'https://i.pinimg.com/736x/48/4a/21/484a218cf250f75d5d7e91fe5eea7bc7.jpg',
      'https://i.pinimg.com/736x/45/90/5f/45905f42e9a38465a034a69229b7fbc2.jpg',
      'https://i.pinimg.com/1200x/2a/91/df/2a91df81616be3bacd1882fbe5e27ba4.jpg',
      'https://i.pinimg.com/736x/2d/b2/ac/2db2ac1b6e9fd041c3bd9fb4b0d6673d.jpg',
      'https://i.pinimg.com/736x/ca/cd/a6/cacda646df2c0ef73013bbd6f19a3109.jpg',
    ]}
    variant="3"
  />
</div>
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
            {/* <iframe
              title="Cairo International Convention Center map"
              src="https://snazzymaps.com/embed/790597"
              width="100%"
              height="600px"
              style={{ border: 'none' }}
            ></iframe> */}
          <iframe
            title="Cairo International Convention Center map"
            frameBorder="0"
            scrolling="no"
            marginHeight="0"
            marginWidth="0"
            src="https://api.maptiler.com/maps/019df96b-e0f5-7537-8811-d6714c320023/?key=HKdyafVjoQHYZLyJTsL0#12.2/30.12750/31.60414"
          >
            <a href="https://www.mapsdirections.info/pl/mapa-populacji/">Check Location</a>
          </iframe>
          
{/* 
<MapContainer   
  center={[30.0727, 31.4177]} // Cairo International Convention Center coords
  zoom={12}
  style={{ height: '600px', width: '100%' }}
  zoomControl={false}
>
  <TileLayer
    url="https://{s}.basemaps.cartocdn.com/rastertiles/voyager/{z}/{x}/{y}{r}.png"
    attribution="©OpenStreetMap ©CartoDB"
  />
  <Marker position={[30.0727, 31.4177]} icon={starIcon} />
</MapContainer> */}
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
        <img className='mandala' src={mandala} alt="" />
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
        <img className='mandala mandala2' src={mandala} alt="" />
        </div>
    </section>
   </div>
   <div className="secContainer sec2Cont">
    <section className="section2 faqSec">
        <HeadingBlock
        style1="dark left"
        heading="Frequently asked questIons"
        />
        <FAQ />
    </section>
   </div>
    </main>
    <Footer />
    </> );
}
 
export default Event;