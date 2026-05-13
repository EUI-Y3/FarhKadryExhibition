import { Link, useParams } from 'react-router-dom';
import React, { useEffect, useState } from 'react';
import { supabase } from './../supabase';
import Preloader from '../components/layout/preloader';
import './vendors.css'
import './vendor-details.css'
import star from './../assets/star.svg'
import favorite from './../assets/favoriteIcon1.svg'
import './event.css'
import SeamlessScene from '../components/common/SeamlessScene';
import './home.css'
import './../animations.css'
import location from './../assets/locationicon2.svg'
import heroillus from '../assets/decoricon01.svg'
import sm1 from './../assets/smicon01.png'
import sm2 from './../assets/smicon02.png'
import sm3 from './../assets/smicon03.png'
import sm4 from './../assets/smicon04.png'
import horse1 from './../assets/vendorDecor2.png'
import back from './../assets/back.svg'
import horse2 from './../assets/vendorDecor.png'
import logo1 from './../assets/logoheader.svg'
import headerbg from './../assets/headerleft.png'
import headerbg2 from './../assets/headerright.png'

import HeadingBlock from '../components/common/heading';
import Footer from '../components/layout/footer';

import IconText from '../components/common/icontextchip';
import Button from '../components/common/button';

const VendorDetails = () => {
    const { id } = useParams();
    const [vendor, setVendor] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const getVendor = async () => {
            const { data } = await supabase
                .from("vendors")
                .select("*, booths(booth_no), categories(title), products(name, image, price, description)")
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
     <div className="headerCont">
        <header>
            <Link to="/vendors">
           <button aria-label="Back To Vendors" title='back' className="size3 blue ">
               <img src={back} alt="" />
           </button>
           </Link>
        
            <img className='headerBg' src={headerbg2} alt="" />
            <img className='headerBg headerBg2' src={headerbg} alt="" />
        <img className='logo' src={logo1} alt="fatima hand logo" />
    </header>
    </div>
    <SeamlessScene/>
    <main>
    <div className="secContainer">
        <section className='scaleIn9 vendorDetailsCont'>
            <img className='vendorPfp scaleIn3' src={vendor.profile_pic} alt={vendor.name} />
            <h2>
                {vendor.name}
            </h2>
            <div className="smFlex">
                 <IconText
                alt="email"
                icon={sm4}
                text={vendor.email}
                style1="grey"
                />
                 <IconText
                alt="email"
                icon={sm3}
                text={vendor.phone}
                style1="grey"
                />
                <IconText
                icon={sm2}
                alt="instagram"
                text={vendor.instagram}
                style1="grey"
                />
                <IconText
                alt="facebook"
                icon={sm1}
                text={vendor.facebook}
                style1="grey"
                />
            </div>
        <div className="btnFlex">
             <div className="locationFlex boothFlex">
                <img src={location} alt="booth location" />
                <h6>Booth {vendor.booths?.booth_no ?? vendor.booth_ID}</h6>
            </div>
             <div className="categoryChip">
                 {vendor.categories?.title}
            </div>
        </div>
        <div className="btnFlex2">
            <Link id="link" to="/exhibitiondetails">
                <button className="size1 size2 beige beige2">
                    <img className='starhover' src={star} alt="" />
                    <h6>Go To Booth</h6>
                    <img className='starhover' src={star} alt="" />
                </button>
            </Link>
        </div>
    </section>
    </div>
    <div className="secContainer modelCont catSec vendorDescSec ">
        <section className='vendorDescSecCont fadeIn scrollAnimate'>
            <img className='vendorsDescImg tilt' src={horse1} alt="" />
            <div>
                <HeadingBlock
                heading="About Us"
                subheading={`Discover The World of ${vendor.name}`}
                style1="decor dark center"
                />
                <p className='center light'>{vendor.description}</p>
            </div>
            <img className='vendorsDescImg tilt' src={horse2} alt="" />
        </section>
    </div>
    <div className="secContainer sec3Cont">
        <section className='productFlex'>
            <div className="categoryCard prodCard">
                <img
                    src={vendor.products.image}
                    alt={vendor.products.name}
                />
            </div>
            <div className="prodCont ">
                <HeadingBlock
                    heading="Featured Product"
                    style1="light left decor"
                />
                <h2 className='light '>
                    {vendor.products.name}
                </h2>
                <p className='light'>
                    {vendor.products.description}
                </p>
            </div>
        </section>
    </div>
    </main>
    <Footer />
        </>
    );
}

export default VendorDetails;