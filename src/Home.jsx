import React from 'react'
import web from '../src/assets/img-1.webp';
// import { NavLink } from 'react-router-dom/cjs/react-router-dom.min'
// import { NavLink } from 'react-router-dom';
import Common from './Common';
function Home() {
  return (
    <>
    
    <Common 
            name='Grow yourself'
             imgsrc={web}
              visit='/service'
               btname='Get Started' />

    </>
  )
}

export default Home;
