import React, { useState } from 'react';
import { supabase } from '../supabase';
import './home.css';
import './booking.css';
import './../animations.css';
import star from '../assets/star.svg'


import illus1 from '../assets/horseillus1.svg';
import frame2 from '../assets/formpage.svg';
import formend from '../assets/formend.png';


import Header from '../components/layout/header';
import HeadingBlock from '../components/common/heading';
import Footer from '../components/layout/footer';

const Booking = () => {

  const [formData, setFormData] = useState({
    phone: '',
    email: '',
    tickets: '',
    day: ''
  });

  const [errors, setErrors] = useState({});

  const [status, setStatus] = useState({
    loading: false,
    message: ''
  });

  const validate = () => {
    const newErrors = {};

    if (!formData.phone.trim()) {
      newErrors.phone = 'Phone number is required.';
    } else if (!/^[0-9+\s-]{7,15}$/.test(formData.phone.trim())) {
      newErrors.phone = 'Enter a valid phone number.';
    }

    if (!formData.email.trim()) {
      newErrors.email = 'Email address is required.';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email.trim())) {
      newErrors.email = 'Enter a valid email address.';
    }

    if (!formData.tickets) {
      newErrors.tickets = 'Number of tickets is required.';
    } else if (parseInt(formData.tickets) < 1) {
      newErrors.tickets = 'At least 1 ticket is required.';
    }

    if (!formData.day) {
      newErrors.day = 'Please select a day.';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData((prev) => ({ ...prev, [name]: value }));

    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: '' }));
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validate()) return;

    setStatus({ loading: true, message: '' });

    const { error } = await supabase
      .from('booking')
      .insert([
        {
          "phone-no": formData.phone,
          email: formData.email,
          tickets_no: parseInt(formData.tickets),
          day: formData.day
        }
      ]);

    if (error) {
      setStatus({
        loading: false,
        message: '❌ Something went wrong. Please try again.'
      });
    } else {
      setStatus({ loading: false, message: '✅ Booking successful!' });
      setFormData({ phone: '', email: '', tickets: '', day: '' });
      setErrors({});
    }
  };

  return (
    <>
      <Header />

      <main>
        <div className="secBg secBg2 scalein2 formPage">
          <img className='theBG' src={frame2} alt="" aria-hidden="true" />
        </div>

        <div className="secContainer formSec">
          <section className="section1 formbg">

            <div className="heroCont1 eventSec1 formCont">

              <img
                className="heroimg scaleIn2"
                src={illus1}
                alt="Decorative Egyptian folklore horse illustration"
              />

              <HeadingBlock heading="Book Your Ticket" style1="dark center decor wrapped" />

              <form onSubmit={handleSubmit} aria-labelledby="booking-title" noValidate>

                <div className="doubleInputs">

                  <div className="inputFlex">
                    <label htmlFor="phone">Phone Number</label>
                    <div className={`inputCont ${errors.phone ? 'inputError' : ''}`}>
                      <input
                        id="phone"
                        name="phone"
                        type="tel"
                        value={formData.phone}
                        onChange={handleChange}
                        placeholder="e.g. 01012345678"
                        aria-required="true"
                        aria-describedby={errors.phone ? 'phone-error' : undefined}
                        aria-invalid={!!errors.phone}
                      />
                    </div>
                    {errors.phone && <span id="phone-error" className="fieldError" role="alert">{errors.phone}</span>}
                  </div>

                  <div className="inputFlex">
                    <label htmlFor="email">Email Address</label>
                    <div className={`inputCont ${errors.email ? 'inputError' : ''}`}>
                      <input
                        id="email"
                        name="email"
                        type="email"
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="example@email.com"
                        aria-required="true"
                        aria-describedby={errors.email ? 'email-error' : undefined}
                        aria-invalid={!!errors.email}
                      />
                    </div>
                    {errors.email && <span id="email-error" className="fieldError" role="alert">{errors.email}</span>}
                  </div>

                </div>

                <div className="doubleInputs">

                  <div className="inputFlex">
                    <label htmlFor="tickets">Number of Tickets</label>
                    <div className={`inputCont ${errors.tickets ? 'inputError' : ''}`}>
                      <input
                        id="tickets"
                        name="tickets"
                        type="number"
                        min="1"
                        value={formData.tickets}
                        onChange={handleChange}
                        placeholder="1"
                        aria-required="true"
                        aria-describedby={errors.tickets ? 'tickets-error' : undefined}
                        aria-invalid={!!errors.tickets}
                      />
                    </div>
                    {errors.tickets && <span id="tickets-error" className="fieldError" role="alert">{errors.tickets}</span>}
                  </div>

                  <div className="inputFlex">
                    <label htmlFor="day">Select Day</label>
                    <div className={`inputCont ${errors.day ? 'inputError' : ''}`}>
                      <input
                        id="day"
                        name="day"
                        type="date"
                        value={formData.day}
                        onChange={handleChange}
                        aria-required="true"
                        aria-describedby={errors.day ? 'day-error' : undefined}
                        aria-invalid={!!errors.day}
                      />
                    </div>
                    {errors.day && <span id="day-error" className="fieldError" role="alert">{errors.day}</span>}
                  </div>

                </div>

                <div aria-live="polite" className="formStatus">
                  {status.message && <p>{status.message}</p>}
                </div>
<button type="submit" disabled={status.loading} className="blue size2">
        <img src={star} alt="" />
        <h6> {status.loading ? 'Booking...' : 'Confirm Booking'}</h6>
        <img src={star} alt="" />
        </button>

              </form>
            </div>
          </section>
<img src={formend} alt="" className='formEnd' />

        </div>
      </main>
      <Footer />
    </>
  );
};

export default Booking;