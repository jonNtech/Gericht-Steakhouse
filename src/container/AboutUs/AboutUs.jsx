import React from 'react';

import { images } from '../../constants'
import './AboutUs.css';

const AboutUs = () => (
  <div className='app__aboutus app__bg flex__center section __ padding' id='about'>
    <div className='app__aboutus-overlay flex__center'>
      <img src={images.G} alt="G letter"></img>
    </div>
    {/* This is the about us section on the left */}
    <div className='app__aboutus-content flex__center'>
      <div className='app__aboutus-content_about'>
        <h1 className='headtext__cormorant'>About Us</h1>
        <img src={images.spoon} alt='about_spoon'className='spoon__img'/>
        <p className='p__opensans'>but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop</p>
        <button type='button' className='custom__button'>Know More</button>
      </div>
      {/* This is the knife image */}
      <div className='app__aboutus-content_knife flex__center'>
        <img src={images.knife} alt="about_knife" />
      </div>
      {/* This is the Our History section */}
      <div className='app__aboutus-content_history'>
        <h1 className='headtext__cormorant'>Our History</h1>
        <img src={images.spoon} alt='about_spoon'className='spoon__img'/>
        <p className='p__opensans'>but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop</p>
        <button type='button' className='custom__button'>Know More</button>
      </div>
    </div>
  </div>
);

export default AboutUs;
