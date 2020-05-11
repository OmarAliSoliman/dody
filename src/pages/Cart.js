import React from "react";
import Footer from '../components/Footer';

function Cart() {
  return (
    <div className="cart-page">
      <div className="container">
        <h6 className="header">My Cart</h6>
        <div className="row">
          <div className="co-sm-12 col-md-8 col-lg-8">
            <div className="cart-product">
              <div
                className="card mb-3 text-capitalize"
                style={{ maxWidth: "100%" }}
              >
                <div className="row no-gutters">
                  <div className="col-md-2 text-center">
                    <img src="./images/frozen.png" className="card-image" alt="..." />
                  </div>
                  <div className="col-md-10">
                    <div className="card-body">
                      <h5 className="card-title"> Name </h5>
                      <span className="card-prise"> prise$ </span>
                      <button className="btn cart-btn-delete">
                        <i className="fas fa-trash"></i>
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="co-sm-12 col-md-4 col-lg-4">
            <div className="card cheack-out">
              <h6>items: 2items</h6>
              <p className="total">
                <span>Total</span>
                <span>2000</span>
              </p>
              <button className="btn">
                cheack out
              </button>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Cart;
