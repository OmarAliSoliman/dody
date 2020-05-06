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
        <div>
          <img src="/images/frozen.png" style={{ width: "15%" }} />
          <p className="legend">Legend 1</p>
        </div>
        <div>
          <img src="/images/frozen.png" style={{ width: "15%" }} />
          <p className="legend">Legend 2</p>
        </div>
        <div>
          <img src="/images/frozen.png" style={{ width: "15%" }} />
          <p className="legend">Legend 3</p>
        </div>
        <div>
          <img src="/images/frozen.png" style={{ width: "15%" }} />
          <p className="legend">Legend 4</p>
        </div>
        <div>
          <img src="/images/frozen.png" style={{ width: "15%" }} />
          <p className="legend">Legend 5</p>
        </div>
        <div>
          <img src="/images/frozen.png" style={{ width: "15%" }} />
          <p className="legend">Legend 6</p>
        </div>
      </Carousel>
    </div>
  );
}

export default ProductSlider;
