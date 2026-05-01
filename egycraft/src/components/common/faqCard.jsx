import React, { useState } from 'react';
import './faqCard.css';
import arrowicon from './../../assets/arrow.svg';

const FAQCard = (props) => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <>
            <div className="separator fadeIn scrollAnimate"></div>

            <div className="faqCard">
                <div className="faqImg">
                    <img
                        className="scaleIn scrollAnimate"
                        src={props.icon}
                        alt="decoration"
                    />
                </div>

                <div className={`questionFlex fadeIn scrollAnimate ${isOpen ? 'open' : ''}`}>
                    <div>
                        <h4>{props.question}</h4>

                        <button
                            className="arrowBtn"
                            aria-label="open answer"
                            onClick={() => setIsOpen(!isOpen)}
                        >
                            <img
                                src={arrowicon}
                                alt=""
                                className={isOpen ? 'rotate4' : ''}
                            />
                        </button>
                    </div>

                    <p>{props.answer}</p>
                </div>
            </div>
        </>
    );
};

export default FAQCard;