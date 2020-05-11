import React, { Component } from 'react';
import {Link} from 'react-router-dom';

export default class CartIcon extends Component {
  render() {
    return (
      <div className="cart-icon">
        <Link to="/cart" className="cart__icon">
          <span class="badge">0</span>
          <i className="fas fa-shopping-cart"></i>
        </Link>
      </div>
    )
  }
}
