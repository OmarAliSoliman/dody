import React, { Component } from "react";
import {Link} from 'react-router-dom';
import axios from 'axios';
import Footer from './Footer';

export default class Phonelogin extends Component {
  state = {
    userPhone: "",
    userPasswrd: "",
    LoginerrorMessage: "",
  };

  handelChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  };

  handelSubmit = (e) => {
    e.preventDefault();
    axios
      .post(
        "https://jsonplaceholder.typicode.com/users",
        {
          user: {
            userEmail: this.state.userPhone,
            userPasswrd: this.state.userPasswrd,
          },
        },
        { withCredentials: true }
      )
      .then((response) => {
        console.log(response);
        console.log(response.data);
        if (response.status === 201) {
          this.props.handelLOgedIN(response.data);
          this.props.history.push("/dashboard");
        }
        // alert("susseful");
        // this.props.history.push('/');
      })
      .catch((error) => {
        console.log(error);
      });
  };

  render() {
    const {userPhone, userPasswrd} = this.state;
    return (
      <div className="rigister">
        <div className="container">
        <h6 className="header">Phone Login</h6>
          <div className="row">
            <div className="col-sm-12 col-lg-7">
              <form onSubmit={this.handelSubmit}>

                <input
                  type="tel"
                  name="userPhone"
                  value={userPhone}
                  onChange={this.handelChange}
                  placeholder="user phone"
                  required
                />

                <input
                  type="password"
                  name="userPasswrd"
                  value={userPasswrd}
                  onChange={this.handelChange}
                  placeholder="password"
                  required
                />

                <button className="mb-2" type="submit">Login</button><br/>
                <Link to="/phone-rigister" >
                  <i className="fas fa-chevron-circle-right mr-1"></i>
                  Dont have account
                  </Link>
              </form>
            </div>
            <div className="col-sm-12 col-lg-5">
              <div className="anouther-rigister">
                <h5>OR Login By</h5>
                <hr />
                <div>
                  <button className="google-account">
                    <i className="fab fa-google"></i>
                    Google account
                  </button>
                  <button className="facebbok-account">
                    <i className="fab fa-facebook"></i>
                    Facebook account
                  </button>
                  <Link to="/mail-login" className="mobile-account">
                    <i className="fas fa-envelope"></i>
                    Email
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
        <Footer />
      </div>
    );
  }
}
