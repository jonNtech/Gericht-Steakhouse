import React from 'react';

import { FooterOverlay, Newsletter } from '../../components'
import { FiFacebook, FiInstagram, FiTwitter } from 'react-icons/fi'
import './Footer.css';
import { images } from '../../constants';

const Footer = () => (
  <div className='app__footer section__padding'>
    <FooterOverlay />
    <Newsletter />

    <div className='app__footer-links'>
      <div className='app__footer-links_contact'>
        <h1 className='app__footer-headtext'>Contact Us</h1>
        <p className='p__opensans'>15 Lane Ends Bungalow Castle Rock CO 80108</p>
        <p className='p__opensans'>1-720-304-8088</p>
        <p className='p__opensans'>1-720-304-8089</p>
      </div>
      <div className='app__footer-links_logo'>
        <img src={images.gericht} alt='gericht_logo'/>
        <p className='p__opensans'>"The best way to find yourself is to lose yourself in the service of others"</p>
        <img src={images.spoon} alt='spoon' className='sponn-img' style={{ marginTop: 15 }}/>
        <div className='app__footer-links_icons'>
          <FiFacebook />
          <FiTwitter />
          <FiInstagram />
        </div>
      </div>
      <div className='app__footer-links_work'>
        <h1 className='app__footer-headtext'>Working Hours</h1>
        <p className='p__opensans'>Monday - Friday:</p>
        <p className='p__opensans'>08:00 am - 12:00 am</p>
        <p className='p__opensans'>Saturday - Sunday:</p>
        <p className='p__opensans'>07:00 am - 11:00 pm</p>
      </div>
    </div>

    <div className='footer__copyright'>
      <p className='p__opensans'>2022 Gericht. All Rights Reserved</p>
    </div>
  </div>
);

export default Footer;
