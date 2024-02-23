import React from 'react';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';

import './servicios.css';

class ServiciosCarousel extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      currentIndex: 0, // Mantén un estado para el índice actual del carrusel
    };
  }

  handleNextClick = () => {
    const { currentIndex } = this.state;
    this.setState({ currentIndex: currentIndex + 1 });
  };

  handlePrevClick = () => {
    const { currentIndex } = this.state;
    this.setState({ currentIndex: currentIndex - 1 });
  };
  

  render() {
    const { currentIndex } = this.state;

    return (
      <div className="custom-carousel-container">
        <Carousel showThumbs={false}></Carousel>
        <Carousel
          showThumbs={false}
          showStatus={false}
          selectedItem={currentIndex} // Establece el elemento seleccionado en función del estado currentIndex
          onChange={(index) => this.setState({ currentIndex: index })} // Actualiza el estado currentIndex al cambiar de diapositiva
          
        >
         
<div>
<iframe
  width="560"
  height="315"
  src="https://www.youtube.com/embed/P9Q7-GlL7Yc"
  title="Video 1"
  frameBorder="0"
  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
  allowFullScreen
></iframe>
<p className="legend">Video 1</p>
</div>
<div>
<iframe
  width="560"
  height="315"
  src="https://www.youtube.com/embed/MDGd2KItTDg"
  title="Video 2"
  frameBorder="0"
  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
  allowFullScreen
></iframe>
<p className="legend">Video 2</p>
</div>
<div>
<iframe
  width="560"
  height="315"
  src="https://www.youtube.com/embed/Qaa90pbYZkQ"
  title="Video 3"
  frameBorder="0"
  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
  allowFullScreen
></iframe>
<p className="legend">Video 3</p>
</div>
<div>
<iframe width="560" height="315" src="https://www.youtube.com/embed/v1Uo6Lh4k-Y?si=fXUZ8EI_0hciGzdh" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
<p className="legend">Video 4</p>
</div>
<div>
<iframe width="560" height="315" src="https://www.youtube.com/embed/QwF0NhgHvSQ?si=e4rcrksV2Yc-6NKG" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
<p className="legend">Video 5</p>
</div>
<div>
<iframe width="560" height="315" src="https://www.youtube.com/embed/kNIPGY17cDQ?si=xI9XqZL1fALZ9K2Z" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
<p className="legend">Video 6</p>
</div>


        </Carousel>
      
      </div>
    );
  }
}

export default ServiciosCarousel;
