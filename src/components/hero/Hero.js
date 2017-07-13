import React, { Component } from 'react';
import './Hero.css';

import heroImage1 from './assets/images/image1.jpg';
import heroImage2 from './assets/images/image2.jpg';
import heroImage3 from './assets/images/image3.jpg';
import { Carousel } from 'react-bootstrap';

class Hero extends Component {  
  render() {
    return (
    <Carousel>
    <Carousel.Item>
      <img id="pictures" src={heroImage1}/>
      <Carousel.Caption>
        <h1>Welcome to My Travel Site</h1>
        <h3>This site is about places I would like to travel</h3>
      </Carousel.Caption>
    </Carousel.Item>
    <Carousel.Item>
      <img id="pictures" src={heroImage2}/>
      <Carousel.Caption>
        <h1>Welcome to My Travel Site</h1>
        <h3>This site is about places I would like to travel</h3>
      </Carousel.Caption>
    </Carousel.Item>
    <Carousel.Item>
      <img id="pictures" src={heroImage3}/>
      <Carousel.Caption>
      <h1>Welcome to My Travel Site</h1>
        <h3>This site is about places I would like to travel</h3>
      </Carousel.Caption>
    </Carousel.Item>
  </Carousel>
    );
  }
}

export default Hero;