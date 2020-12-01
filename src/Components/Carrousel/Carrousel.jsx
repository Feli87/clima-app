import React, { Component } from 'react';

class Carrousel extends Component {

  render() {
    return (
      <div>
        <div id="carouselExampleSlidesOnly" className="carousel slide" data-ride="carousel">
            <div className="carousel-inner">
                <div className="carousel-item active">
                    <img src="https://picsum.photos/id/237/200/50?random=1" className="d-block w-100 " alt="..."/>
                </div>
                <div className="carousel-item">
                    <img src="https://picsum.photos/200/50?random=2" className="d-block w-100" alt="..."/>
                </div>
                <div className="carousel-item">
                    <img src="https://picsum.photos/200/50?random=3" className="d-block w-100 " alt="..."/>
                </div>
            </div>
        </div>
      </div>

    );
  }

}

export default Carrousel;