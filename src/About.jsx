import React from 'react';
import web from '../src/assets/img-6.web.jpg';
// import { NavLink } from 'react-router-dom/cjs/react-router-dom.min'
// import { NavLink } from 'react-router-dom';
import Common from './Common';

function About() {
    return (
        <>
            <Common 
            name='Welcome to My Blog'
             imgsrc={web}
              visit='/contact'
               btname='Get Start' />
        </>
    );
};

export default About;