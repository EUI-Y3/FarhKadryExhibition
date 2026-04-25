import React from 'react';
import { supabase } from '../supabase';

import './home.css'
import logodecor2 from '../assets/decor.svg'
import HeadingBlock from '../components/common/heading';
import sec2img from '../assets/sec2img.png'
import Button from '../components/common/button';

const HomeS2 = () => {
    return ( <>
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
    
    </> );
}
 
export default HomeS2;