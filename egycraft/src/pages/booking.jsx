import React from 'react';
import './home.css'
import './../animations.css'
import './booking.css'
import './../animations.css'
import illus1 from '../assets/horseillus1.svg'
import frame2 from '../assets/formpage.svg'
import Header from '../components/layout/header';
import HeadingBlock from '../components/common/heading';
const Booking = () => {
    return (  <>
    <Header />
    {/* <SeamlessScene/> */}
    <main>
    <div className="secBg secBg2 scalein2 formPage">
        <img src={frame2} alt=""  />

            </div>
    <div className="secContainer">
        <section className='section1 formbg'>
        <div className="heroCont1 eventSec1 formCont">
            <img className='heroimg' src={illus1} alt="egyptian folklore horse illustration" />
            <HeadingBlock
            heading="Book your Ticket"
            style1="dark center decor"
            />
            <form action="Submit">
               <div className="doubleInputs">
                 <div className="inputFlex">
                    <label htmlFor="nameInput"> Label</label>
                <div className="inputCont">
                    <input id='nameInput' type="text" />
                </div>
                </div>
                <div className="inputFlex">
                    <label htmlFor="nameInput"> Label</label>
                <div className="inputCont">
                    <input id='nameInput' type="text" />
                </div>
                </div>
               </div>
<div className="doubleInputs">
                 <div className="inputFlex">
                    <label htmlFor="nameInput"> Label</label>
                <div className="inputCont">
                    <input id='nameInput' type="text" />
                </div>
                </div>
                <div className="inputFlex">
                    <label htmlFor="nameInput"> Label</label>
                <div className="inputCont">
                    <input id='nameInput' type="text" />
                </div>
                </div>
               </div>
               <div className="doubleInputs">
                 <div className="inputFlex">
                    <label htmlFor="nameInput"> Label</label>
                <div className="inputCont">
                    <input id='nameInput' type="text" />
                </div>
                </div>
                <div className="inputFlex">
                    <label htmlFor="nameInput"> Label</label>
                <div className="inputCont">
                    <input id='nameInput' type="text" />
                </div>
                </div>
               </div>
            </form>
        </div>
    </section>
    </div>
<div className="secContainer">
    
    </div>   
    </main>
    
    </>);
}
 
export default Booking;