import React from 'react';
import SeamlessScene from '../components/common/SeamlessScene';
import Model1 from '../components/common/model';
import './home.css'
import './../animations.css'

import logoicon from '../assets/logo2.svg'
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
const Home = () => {
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
            <div className="logoicon">
            <img src={logoicon} alt="fatima hand logo" />
            </div>
            <div className="logoCont">
                <MouseTrailSVG />
            {/* <img className='logodecor1' src={logodecor1} alt="" /> */}
            <img src={herologo} alt="Egycraft ايجي كرافت" />
            <img className='logodecor2' src={logodecor2} alt="" />
        </div>
        <h3>Discover The Craft of Egypt</h3>
        <div className="btnFlex">
            <Button style1="size2 blue" cta="Book my ticket" link="/booking" />
            <Button style1="size2 beige" cta="Book my ticket" link="/booking" />

        </div>
        </div>
    </section>
    </div>
    <div className="secContainer modelCont">
        <div className="heroCont2 ">
            <div className="animatedCircleCont">
            <div className="rectangle1"></div>
                <img src={circle} alt="" />
            </div>
            <Model1 />
        </div>
    </div>
    <div className="secContainer sec2Cont scrollAnimate2">
        <section className='section2'>
        <div>
            <HeadingBlock 
        style1="dark left floatIn scrollAnimate"
        heading="Who Are We?"
        img={logodecor2}  />
        <p>
            EgyCraft is Egypt's premier digital platform connecting art lovers with the finest handmade crafts and cultural experiences across the country.
Discover exhibitions showcasing traditional and contemporary Egyptian crafts in vibrant cultural spaces.
Explore vendors and their unique stories, from pottery masters in Fustat to textile weavers in Akhmim.

Book workshops to learn ancestral techniques passed down through generations of Egyptian artisans.
        </p>
            <Button style1="size2 blue" cta="Book my ticket" link="/booking" />

        </div>
        <div className="sec2imgCont">
        <img className='moveIn scrollAnimate2' src={sec2img} alt="" />
        </div>
    </section>
    </div>
       <div className="secContainer sec3Cont moveIn scrollAnimate2">
     <section className='section2 section3'>
<div className="mandalaCont">
        <img className='mandala' src={mandala} alt="" />

</div>
        <div className="rightBlock">
        <HeadingBlock 
        style1="light left"
        heading="How It works" />
        <div className="hiwFlex">
        <HowItWorks
        icon ={hiwicon1}
        number="1"
        title="Browse our vendors and categories"
        desc="Explore upcoming and current Vendors across Egypt. Filter by location, date, and craft category to find events that match your interests."
        />
        </div>
        </div>
    </section>
   </div>
    </main>


    </> );
}
 
export default Home;