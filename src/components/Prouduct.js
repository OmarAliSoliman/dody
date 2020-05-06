import React, {Component} from 'react';
import {Link} from 'react-router-dom';

// css
import '../css/style.css';

class Product extends Component{
  render(){
    const {product} = this.props;
    return(
      <div className="product-component">
        <div className="card shadow text-capitalize">
          <h5 className="card-title pt-4 pl-4"> {product.name} </h5>
          <span className="status">{product.status}</span>
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
}

export default Product;