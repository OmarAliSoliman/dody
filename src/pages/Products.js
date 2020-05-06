import React, { useState, useEffect } from "react";

// api
import { getProducts } from "../api/GetProduct";

// compnents
import Proudct from '../components/Proudct';

function Products() {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    getProducts().then((response) => {
      setProducts(response.products);
    });
  });

  return (
    <div className="products-page mt-5">
      <div className="container">
        <div className="row">
          {products.map((product, index) => (
            <div key={index} className="col-sm-12 col-md-6 col-lg-3">
              <Proudct product={product} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Products;
