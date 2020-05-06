import React, { Component } from "react";
import { Link, NavLink } from "react-router-dom";
// import CartIcon from './CartIcon';

class DeskTopNavBar extends Component {
  render() {
    const { changeMode, cheaked } = this.props;
    return (
      <div>
        {/* desktop navbar */}
        <nav className="navbar navbar-expand-lg navbar-light">
          <NavLink className="navbar-brand" to="/">
            Navbar
          </NavLink>
          <button
            class="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav">
              <li className="nav-item">
                <NavLink
                  className="nav-link"
                  activeClassName="active"
                  exact
                  to="/"
                >
                  Products
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink
                  className="nav-link"
                  activeClassName="active"
                  exact
                  to="/cart"
                >
                  Cart
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink
                  className="nav-link"
                  activeClassName="active"
                  exact
                  to="/scroll-feed"
                >
                  Scroll-feed
                </NavLink>
              </li>
              {/* <li className="nav-item">
                <NavLink className="nav-link" activeClassName="active" exact to="/about">About</NavLink>
              </li> */}
            </ul>
          </div>
        </nav>
      </div>
    );
  }
}

export default DeskTopNavBar;
