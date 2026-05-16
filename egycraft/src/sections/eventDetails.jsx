import React, { useEffect, useState } from 'react';
import './../pages/event.css';

import Detail from '../components/common/detailCard';

import { supabase } from '../supabase';

// ICONS
import detailicon1 from './../assets/eventicon01.svg';
import detailicon2 from './../assets/eventicon02.svg';
import detailicon3 from './../assets/eventicon03.svg';
import detailicon4 from './../assets/eventicon04.svg';

const ExhibitionDetails = () => {

    const [details, setDetails] = useState([]);
    // GET DATA
    const getDetails = async () => {

        const { data, error } = await supabase
            .from("exhibitionDetails")
            .select("*");

        if (error) {
            console.log(error);
            return;
        }

        setDetails(data);
    };

    useEffect(() => {
        getDetails();
    }, []);

    return (
        <>
            <div className="detailsFlex moveIn scrollAnimate">

                {details.map((item) => (

                    <Detail
                        key={item.id}
                        icon={item.icon}
                        style1={item.class}
                        title={item.detailTitle}
                        desc={item.description}
                        desc2={item.description2}
                    />

                ))}

            </div>
        </>
    );
}

export default ExhibitionDetails;