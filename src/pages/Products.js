import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

// api
import { getProducts } from "../api/GetProduct";

// compnents
import Proudct from "../components/Proudct";
import Footer from '../components/Footer';

function Products() {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    getProducts().then((response) => {
      setProducts(response.products);
    });
  });

  return (
    <div className="products-page">
      <div className="container">
        <h6 className="header">Home</h6>
        <div className="row">
          <div className="col-lg-12">
          <Link className="subcategry-link btn sub-category-btn" to="/subcategory">electronic</Link>
          <Link className="subcategry-link btn sub-category-btn" to="/">clothes</Link>
          </div>

          {products.map((product, index) => (
            <div key={index} className="col-sm-12 col-lg-12">
              <Proudct product={product} />
            </div>
          ))}
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Products;
