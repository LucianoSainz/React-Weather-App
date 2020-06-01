import React from 'react';
import { Carousel } from 'react-bootstrap';

const Home = () => {
  

  return (

    <Carousel>
      <Carousel.Item>
        <img
          className="d-block w-100"  height="400px"
          src="src/app/components/images/slide1.jpg"
          alt="First slide"
        />

      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100" height="400px"
          src="src/app/components/images/slide2.jpg"
          alt="Third slide"
        />

      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"  height="400px"
          src="src/app/components/images/slide3.jpg"
          alt="Third slide"
        />

      </Carousel.Item>
    </Carousel>
    
  
  )
}

export default Home;
