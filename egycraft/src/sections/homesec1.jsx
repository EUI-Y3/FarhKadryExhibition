import React, { useState, useEffect } from 'react';
import { supabase } from '../supabase';

import './../pages/home.css'
import logodecor2 from '../assets/decor.svg'
import HeadingBlock from '../components/common/heading';
import sec2img from '../assets/sec2img.png'
import Button from '../components/common/button';

const HomeS2 = () => {

    const [section, setSection] = useState(null);

    useEffect(() => {
        const getSection = async () => {
            const { data, error } = await supabase
                .from('section')
                .select('*')
                .eq('id', 1)
                .single();

            if (error) {
                console.log(" error:", error);
                return;
            }
            setSection(data);
        };

        getSection();
        
    }, []);

    if (!section) return null;

    return (
        <section className='section2'>
            <div>
                <HeadingBlock 
                    style1="dark left floatIn scrollAnimate"
                    heading={section.title}
                    img={logodecor2}  
                />

                <p>{section.description}</p>

                <Button 
                    style1="size2 blue" 
                    cta="Book my ticket" 
                    link="/booking" 
                />
            </div>

            <div className="sec2imgCont">
                <img 
                    className='moveIn scrollAnimate2' 
                    src={sec2img} 
                    alt="" 
                />
            </div>
        </section>
    );
}

export default HomeS2;