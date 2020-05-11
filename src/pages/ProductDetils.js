import React, { useState, useEffect } from "react";

// api
import { getProducts } from "../api/GetProduct";
import ProductSlider from "../components/ProductSlider";
import AddReview from "../components/PopUp";

function ProductDetils(props) {
  const productId = props.match.params.id;
  const [product, setProduct] = useState({});
  const [star, setStar] = useState([]);
  useEffect(() => {
    getProducts().then((response) => {
      setProduct(response.products[productId - 1]);
      var star = [];
      for (var i = 0; i < 5; i++) {
        star.push(<i className="fas fa-star" key={i}></i>);
      }
      setStar(star);
    });
  }, []);
  return (
    <div className="product-details">
      <div className="">
        <div className="row">
          <div className="col-sm-12 col-lg-5">
            <div className="product-slider">
              <ProductSlider />
            </div>
            <div className="review">
              <h5>PRODUCT RIVEW</h5>
              <AddReview />
              <div className="client-review">
                <h6 className="client-name text-capitalize">omar ali</h6>
                <p className="client-review-words">
                  {" "}
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Aenean efficitur sit amet massa fringilla egestas. Nullam{" "}
                </p>
              </div>
              <div className="client-review">
                <h6 className="client-name text-capitalize">ahmed ali</h6>
                <p className="client-review-words">
                  {" "}
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Aenean efficitur sit amet massa fringilla egestas. Nullam{" "}
                </p>
              </div>
              <div className="client-review">
                <h6 className="client-name text-capitalize">omar ahmed</h6>
                <p className="client-review-words">
                  {" "}
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Aenean efficitur sit amet massa fringilla egestas. Nullam{" "}
                </p>
              </div>
              <div className="client-review">
                <h6 className="client-name text-capitalize">omar ahmed</h6>
                <p className="client-review-words">
                  {" "}
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Aenean efficitur sit amet massa fringilla egestas. Nullam{" "}
                </p>
              </div>
            </div>
          </div>
          <div className="col-sm-12 col-lg-7">
            <h6 className="info-header">Dadoody</h6>
            <div className="product-info">
              <h5 className="produc-name"> {product.name} </h5>
              <p className="product-star">{star}</p>
              <p className="product-descreption"> {product.descreption} </p>
              <p className="product-price"> {product.price}$ </p>
              <div className="choose-color">
                <h6>Color</h6>
                <button className="btn">red</button>
                <button className="btn">green</button>
                <button className="btn">blue</button>
              </div>
              <div className="card add-to p-3">
                <p className="total">
                  <span>Total</span>
                  <span>2000</span>
                </p>
                <button className="addto-cart-btn">
                  <i className="fas fa-shopping-basket"></i>
                  <span>add to cart</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProductDetils;
