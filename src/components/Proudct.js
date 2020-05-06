import React from 'react';
import {Link} from 'react-router-dom';

function Proudct(props) {
  const {product} = props;
  return (
    <div className="product-component">
      <div className="card shadow text-capitalize">
        <h5 className="card-title pt-4 pl-4"> {product.name} </h5>
        <img className="card-img-top" src={product.image} alt="Card imag cap" />
        <div className="card-body">
          <p className="card-text"> {product.descreption} </p>
          <span className="card-prise"> {product.price}$ </span>
          <Link to={"/product-details/" + product.id} className="btn btn-link">Details</Link>
        </div>
      </div>
    </div>
  )
}

export default Proudct





















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