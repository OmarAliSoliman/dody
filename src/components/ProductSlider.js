import React from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";

function ProductSlider() {
  return (
    <div>
      <Carousel
        showArrows={true}
        // onChange={onChange}
        // onClickItem={onClickItem}
        // onClickThumb={onClickThumb}
      >
        <div className="slider-image">
          <img src="/images/frozen.png" />
          <button className="legend">
            <i className="fas fa-shopping-cart"></i>
          </button>
        </div>
        <div className="slider-image">
          <img src="/images/frozen.png" />
          <button className="legend">
            <i className="fas fa-shopping-cart"></i>
          </button>
        </div>
        <div className="slider-image">
          <img src="/images/frozen.png" />
          <button className="legend">
            <i className="fas fa-shopping-cart"></i>
          </button>
        </div>
      </Carousel>
    </div>
  );
}

export default ProductSlider;
