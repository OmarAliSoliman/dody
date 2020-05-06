import React, { useState, useEffect } from "react";

// api
import { getProducts } from "../api/GetProduct";
import ProductSlider from "../components/ProductSlider";

function ProductDetils(props) {
  const productId = props.match.params.id;
  const [product, setProduct] = useState({});
  useEffect(() => {
    getProducts().then((response) => {
      setProduct(response.products[productId - 1]);
    });
  });
  return (
    <div className="product-details mt-3">
      <div className="container-fluid">
        <div className="row">
          <div className="col-lg-12">
            <buttun className="btn btn-dark btn-add">
              <i className="fas fa-plus"></i>
              <br />
              <i className="fas fa-shopping-cart"></i>
            </buttun>
            <ProductSlider />
          </div>
        </div>
      </div>
      <div className="container">
        <div className="row">
          <div className="col-sm-12 col-lg-6">
            <div className="info">
              <h6>Description & chhosen</h6>
            </div>
          </div>
          <div className="col-sm-12 col-lg-6">
            <div className="">
              <h6>Info</h6>
            </div>
          </div>
        </div>
        <div className="row mt-5">
          <div className="col-sm-12 col-lg-12">
            <div className="review">
              <h6>Reviews</h6>
            </div>
          </div>
        </div>
        <button className="btn btn-primary">Add to cart</button>
      </div>
    </div>
  );
}

export default ProductDetils;
