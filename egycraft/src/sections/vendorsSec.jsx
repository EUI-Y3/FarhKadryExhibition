import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './vendorsSec.css'
import star from './../assets/star.svg'
import favorite from './../assets/favoriteIcon1.svg'
import location from './../assets/locationicon2.svg'
import './../components/common/button.css'
import pfp1 from './../assets/artpfp.png'

import { supabase } from './../supabase';

const VendorsSec = () => {
    const [vendors, setVendors] = useState([]);

    const getAllVendors = async () => {
        const { data, error } = await supabase
            .from("vendors")
            .select("*, booths(booth_no), categories(title)");

        if (error) {
            console.log(error);
            return;
        }

        setVendors(data);
    };

    useEffect(() => {
        getAllVendors();
    }, []);

    return (
        <>
            <div className="vendorsFlex">
                {vendors.map((vendor) => (
                    <div key={vendor.id} className="vendorCard">
                        <img className='vendorPfp' src={vendor.profile_pic} alt={vendor.name} />
                        <div className="vendorCardBody">
                            <h5>{vendor.name}</h5>
                            <div className="cardFlex1">
                                <div className="locationFlex boothFlex">
                                    <img src={location} alt="booth location" />
                                    <h6>Booth {vendor.booths?.booth_no ?? vendor.booth_ID}</h6>
                                </div>
                                <div className="categoryChip">
                                    {vendor.categories?.title}
                                </div>
                            </div>
                            <p>{vendor.description}</p>
                            <div className="btnFlex2">
                                <Link id="link" to={"/vendor-details/" + vendor.id}>
    <button className="size1 size2 blue">
        <img className='starhover' src={star} alt="" />
        <h6>View Profile</h6>
        <img className='starhover' src={star} alt="" />
    </button>
</Link>
                                <button title='favourite' className="size3 blue pink">
                                    <img src={favorite} alt="" />
                                </button>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </>
    );
}

export default VendorsSec;