import React, { Component } from 'react';

// api
import { getProducts } from "../api/GetProduct";
import Product from './Proudct';

export default class SubCategory extends Component {

  state = {
    products: [],
    product: {}
  }

  componentDidMount=()=>{
    getProducts().then((response)=>{
      this.setState({
        products: response.products
      })
    })
  }

  render() {
    return (
      <div className="sub-category mt-5">
        <div className="container">
          <h6 className="header">Sub Category Name</h6>
          <div className="row">
            {this.state.products.map((product, index)=>(
              <div className="col-sm-12 col-lg-12">
                <Product product={product} />
              </div>
            ))}
          </div>
        </div>
      </div>
    )
  }
}
