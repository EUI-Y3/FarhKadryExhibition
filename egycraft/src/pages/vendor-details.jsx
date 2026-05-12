import { useParams } from 'react-router-dom';
import React, { useEffect, useState } from 'react';
import { supabase } from './../supabase';
import Preloader from '../components/layout/preloader';

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
          <h1>{vendor.name}</h1>
        </>
    );
}

export default VendorDetails;