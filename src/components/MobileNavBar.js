import React, { Component } from "react";
import { Link, NavLink } from "react-router-dom";
// import CartIcon from './CartIcon';

class MobileNavBar extends Component {
  openNav = () => {
    document.getElementById("mySidenav").style.width = "250px";
  };

  closeNav = () => {
    document.getElementById("mySidenav").style.width = "0";
  };
  render() {
    const { changeMode, cheaked } = this.props;
    return (
      <div>
        {/* mobile navbar */}
        <div id="mySidenav" className="sidenav">
          <span className="closebtn" onClick={this.closeNav}>
            &times;
          </span>
          <Link className="navbar-brand" to="/">
            <img
              src="https://img.icons8.com/ios/32/000000/animation.png"
              alt="Logo"
            />
          </Link>
          <NavLink activeClassName="mobile-active-link" exact to="/">
            Products
          </NavLink>
          <NavLink activeClassName="mobile-active-link" exact to="/cart">
            Cart
          </NavLink>
          {/* <NavLink activeClassName="mobile-active-link" exact to="/about">About</NavLink> */}
        </div>
        <div className="navbar side-nav-button">
          <div className="container">
            <span onClick={this.openNav}>
              {" "}
              <i className="fas fa-bars"></i>{" "}
            </span>
          </div>
          {/* <CartIcon /> */}
        </div>
      </div>
    );
  }
}

export default MobileNavBar;
