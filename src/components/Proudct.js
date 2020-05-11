import React, {useState, useEffect} from "react";
import { Link } from "react-router-dom";

function Proudct(props) {
  const { product } = props;
  const [star, setStar] = useState([]);
  useEffect(() => {
    var star = [];
    for(var i=0; i< product.evaluation; i++){
      star.push(<i className="fas fa-star" key={i}></i>);
    }
    setStar(star);
  }, [])
  return (
    <div className="product-component">
      <div className="card mb-3 text-capitalize" style={{maxWidth: '100%'}}>
        <div className="row no-gutters">
          <div className="col-md-2 text-center">
            <img src={product.image} className="card-img" alt="..." />
          </div>
          <div className="col-md-10">
            <div className="card-body">
              <h5 className="card-title"> {product.name} </h5>
              <p className="star"> {star} </p>
              <p className="card-text"> {product.descreption} </p>
              <span className="card-prise"> {product.price}$ </span>
              <Link
                to={"/product-details/" + product.id}
                className="btn btn-link"
              >
                <i className="fas fa-chevron-right"></i>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Proudct;

// import React, {Component} from 'react';
//

// class Product extends Component{
//   render(){
//
//     return(
//
//     )
//   }
// }

// export default Product;
