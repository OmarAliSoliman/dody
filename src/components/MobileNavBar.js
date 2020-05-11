import React, { Component } from "react";
import { Link, NavLink } from "react-router-dom";
// import CartIcon from './CartIcon';

class MobileNavBar extends Component {
  openNav = () => {
    document.getElementById("mySidenav").style.width = "100px";
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
          <div className="links">
            <NavLink activeClassName="mobile-active-link" exact to="/">
              <i className="fa fa-home" aria-hidden="true"></i>
            </NavLink>
            <NavLink activeClassName="mobile-active-link" exact to="/cart">
              <i className="fa fa-shopping-cart" aria-hidden="true"></i>
            </NavLink>
            <NavLink
              className="nav-link"
              activeClassName="mobile-active-link"
              exact
              to="/scroll-feed"
            >
              <i className="fab fa-facebook"></i>
            </NavLink>
            <NavLink
              className="nav-link"
              activeClassName="mobile-active-link"
              exact
              to="/mail-login"
            >
              <i className="fas fa-user" aria-hidden="true"></i>
            </NavLink>
          </div>
        </div>
        <div onClick={this.openNav} className="navbar side-nav-button">
          <div className="container">
            <span>
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
