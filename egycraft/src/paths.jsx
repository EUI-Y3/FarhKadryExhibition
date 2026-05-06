import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/home';
import Event from './pages/event';
import Error from './pages/error';
import Booking from './pages/booking';
import Vendors from './pages/vendors';
function Paths() {
    return (

    <BrowserRouter>
    <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/exhibitiondetails" element={<Event />} />
        <Route path="/booking" element={<Booking />} />
        <Route path="/vendors" element={<Vendors />} />


        <Route path="*" element={<Error />} />

    </Routes>
    </BrowserRouter>
    );
}
 
export default Paths;