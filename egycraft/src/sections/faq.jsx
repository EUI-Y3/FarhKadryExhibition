import React, { useState, useEffect } from 'react';
import { supabase } from '../supabase';

import './faq.css';
import './../pages/home.css';

import icon1 from '../assets/decoricon01.svg';
import icon2 from '../assets/decoricon02.svg';
import icon3 from '../assets/decoricon03.svg';

import FAQCard from '../components/common/faqCard';

const FAQ = () => {
    const [questions, setQuestions] = useState([]);

    useEffect(() => {
        const getQuestions = async () => {
            const { data, error } = await supabase
                .from('faq')
                .select('*');
            if (error) {
                console.log("Error:", error);
                return;
            }
            setQuestions(data);
        };
        getQuestions();
    }, []);
    return (
        <>
            <div id="frequently-asked" className="faqFlex">
                {questions.map((item, index) => (
                    <FAQCard
                        key={item.id}
                        question={item.question}
                        answer={item.answer}
                        icon={item.icon}
                    />
                ))}
            </div>
        </>
    );
};

export default FAQ;