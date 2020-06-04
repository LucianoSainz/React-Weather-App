import React, {Fragment} from 'react';
import { Carousel } from 'react-bootstrap';
import Component from './Component';


const Home = () => {


  return (
<Fragment>
    <Carousel>
      <Carousel.Item>
        <img
          className="d-block w-100" height="400px"
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
          className="d-block w-100" height="400px"
          src="src/app/components/images/slide3.jpg"
          alt="Third slide"
        />

      </Carousel.Item>
    </Carousel>
    
        <>
        <Component/>
        </>
</Fragment>
  )
}

export default Home;
