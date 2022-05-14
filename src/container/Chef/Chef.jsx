import React from 'react';

import {SubHeading} from '../../components'
import {images} from '../../constants'
import './Chef.css';

const Chef = () => (
  <div className='app__bg app__ wrapper section__padding'>
    <div className='app__wrapper_img app__wrapper_img-reverse' >
      <img src={images.chef} alt='chef' />
    </div>

    <div className='app__wrapper_info'>
      <SubHeading title="Chef's Word" />
      <h1 className='headtext__cormorant'>What We Believe In</h1>

      <div className='app__chef-content'>
        <div className='app__chef-content_quote'>
          <img src={images.quote} alt='quote' />
          <p className='p__opensans'>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters</p>
        </div>
        <p className='p__opensans'>Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy</p>
      </div>

      <div className='app__chef-sign'>
        <p>Kevin Luo</p>
        <p className='p__opensans'>Chef & Founder</p>
        <img src={images.sign} alt='sign'/>
      </div>
    </div>
  </div>
);

export default Chef;
