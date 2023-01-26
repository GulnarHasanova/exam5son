import React from 'react'
import Carousel from 'react-bootstrap/Carousel';
import './Sec1.scss'

function Section1() {
  return (
    <>
     <Carousel>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://preview.colorlib.com/theme/course/images/slider_background.jpg"
          alt="First slide"
        />
        <Carousel.Caption>
        <div className="container">
         <div className="container merkez">
         <p style={{fontSize:72}}>  Get Your Education Today</p>
         </div>
         </div>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://preview.colorlib.com/theme/course/images/slider_background.jpg"
          alt="Second slide"
        />

        <Carousel.Caption>
        <div className="container">
         <div className="container merkez">
         <p style={{fontSize:72}}>  Get Your Education Today</p>
         </div>
         </div>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://preview.colorlib.com/theme/course/images/slider_background.jpg"
          alt="Third slide"
        />

        <Carousel.Caption>
        <div className="container">
         <div className="container merkez">
         <p style={{fontSize:72}}>  Get Your Education Today</p>
         </div>
         </div>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
    
    </>
  )
}

export default Section1