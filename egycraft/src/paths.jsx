import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/home';
import Event from './pages/event';
import Error from './pages/error';
function Paths() {
    return (

    <BrowserRouter>
    <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/exhibitiondetails" element={<Event />} />


        <Route path="*" element={<Error />} />

    </Routes>
    </BrowserRouter>
    );
}
 
export default Paths;