import React from 'react';
import { CarouselProvider, Slider, Slide, ButtonBack, ButtonNext } from 'pure-react-carousel';
import 'pure-react-carousel/dist/react-carousel.es.css';
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa'; // Import icons from a library like react-icons

export default class CarouselWithButtons extends React.Component {
  render() {
    return (
      <CarouselProvider
        naturalSlideWidth={10}
        naturalSlideHeight={5}
        totalSlides={3}
      >
        <Slider>
          {/* Slide 1 */}
          <Slide index={0}>
            <div style={{ position: 'relative', textAlign: 'center' }}>
              <img src='https://tse3.mm.bing.net/th?id=OIP.nC4jRKcYlt7UXhgYcQ8Y7QHaCe&pid=Api&P=0&h=220' style={{ width: "1500px", height: "600px" }} />
              <div style={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)', color: 'white', fontSize: '24px' }}>
                Your Text Here 1
              </div>
              <ButtonBack style={{ position: 'absolute', top: '50%', left: '5%', transform: 'translate(0, -50%)', backgroundColor: 'transparent', border: 'none', fontSize: '24px', color: 'white' }}>
                <FaChevronLeft />
              </ButtonBack>
              <ButtonNext style={{ position: 'absolute', top: '50%', right: '5%', transform: 'translate(0, -50%)', backgroundColor: 'transparent', border: 'none', fontSize: '24px', color: 'white' }}>
                <FaChevronRight />
              </ButtonNext>
            </div>
          </Slide>

          {/* Slide 2 */}
          <Slide index={1}>
            <div style={{ position: 'relative', textAlign: 'center' }}>
              <img src='https://tse3.mm.bing.net/th?id=OIP.H-9HsCiko4F8o5v8_R1DDgAAAA&pid=Api&P=0&h=220' style={{ width: "1500px", height: "600px" }} />
              <div style={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)', color: 'white', fontSize: '24px' }}>
                Your Text Here 2
              </div>
              <ButtonBack style={{ position: 'absolute', top: '50%', left: '5%', transform: 'translate(0, -50%)', backgroundColor: 'transparent', border: 'none', fontSize: '24px', color: 'white' }}>
                <FaChevronLeft />
              </ButtonBack>
              <ButtonNext style={{ position: 'absolute', top: '50%', right: '5%', transform: 'translate(0, -50%)', backgroundColor: 'transparent', border: 'none', fontSize: '24px', color: 'white' }}>
                <FaChevronRight />
              </ButtonNext>
            </div>
          </Slide>

          {/* Slide 3 */}
          <Slide index={2}>
            <div style={{ position: 'relative', textAlign: 'center' }}>
              <img src='https://tse3.mm.bing.net/th?id=OIP.D0iBqjU8tbvd7VhHAfSvrgHaEK&pid=Api&P=0&h=220' style={{ width: "1500px", height: "600px" }} />
              <div style={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)', color: 'white', fontSize: '24px' }}>
                Your Text Here 3
              </div>
              <ButtonBack style={{ position: 'absolute', top: '50%', left: '5%', transform: 'translate(0, -50%)', backgroundColor: 'transparent', border: 'none', fontSize: '24px', color: 'white' }}>
                <FaChevronLeft />
              </ButtonBack>
              <ButtonNext style={{ position: 'absolute', top: '50%', right: '5%', transform: 'translate(0, -50%)', backgroundColor: 'transparent', border: 'none', fontSize: '24px', color: 'white' }}>
                <FaChevronRight />
              </ButtonNext>
            </div>
          </Slide>
        </Slider>
      </CarouselProvider>
    );
  }
}
