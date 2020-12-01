import React, { Component } from 'react';
import image1 from './images/1.jpg';
import image2 from './images/2.jpg';
import image3 from './images/3.jpg';

class Carrousel extends Component {

  render() {
   
    return (
      
      <div>
        <div id="carouselExampleSlidesOnly" className="carousel slide" data-ride="carousel">
            <div className="carousel-inner">
                <div className="carousel-item active">
                    <img src={image1} className="d-block w-100 " alt="..."/>
                </div>
                <div className="carousel-item">
                    <img src={image2} className="d-block w-100" alt="..."/>
                </div>
                <div className="carousel-item">
                    <img src={image3} className="d-block w-100 " alt="..."/>
                </div>
            </div>
        </div>
      
        </div>
      

    );
  }

}

export default Carrousel;