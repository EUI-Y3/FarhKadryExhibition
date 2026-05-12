import { useParams } from 'react-router-dom';
import React, { useEffect, useState } from 'react';
import { supabase } from './../supabase';
import Preloader from '../components/layout/preloader';
import './vendors.css'
import './vendor-details.css'
import './event.css'
import SeamlessScene from '../components/common/SeamlessScene';
import './home.css'
import './../animations.css'
import heroillus from '../assets/decoricon01.svg'

import frame1 from '../assets/vendorProfileBg.png'
import Header from '../components/layout/header';
import Button from '../components/common/button';
import HeadingBlock from '../components/common/heading';
import Footer from '../components/layout/footer';
import Categories from '../sections/categories';
import VendorsSec from '../sections/vendorsSec';
import BlinkingEye from '../components/common/blinkingEye';

const VendorDetails = () => {
    const { id } = useParams();
    const [vendor, setVendor] = useState(null);
const [loading, setLoading] = useState(true);

    useEffect(() => {
        const getVendor = async () => {
            const { data } = await supabase
                .from("vendors")
                .select("*, booths(booth_number), categories(title)")
                .eq("id", id)
                .single();
            setVendor(data);
            setLoading(false);

        };

        getVendor();
    }, [id]);

    if (loading) return <Preloader/>;
    else
    return (
        <>
    <Header />
    <SeamlessScene/>
    <main>
  
    <div className="secContainer">
        <section className='fadeIn vendorDetailsCont'>
            <img className='vendorPfp' src={vendor.profile_pic} alt={vendor.name} />
            <h2>
                {vendor.name}
            </h2>
            
            <div className="categoryChip">
                 {vendor.categories?.title}
            </div>
    </section>
    </div>
    <div className="secContainer modelCont catSec">
    </div>
   <div className="secContainer sec2Cont  modelCont mapCont">
    <section className='section2 mapSec'>
    <div className="map1 map2">
        <HeadingBlock 
        style1="dark center decor"
        heading="All Artisians"
        subheading="View our booths and find directions in 3D mode"
        />
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
        </>
    );
}

export default VendorDetails;