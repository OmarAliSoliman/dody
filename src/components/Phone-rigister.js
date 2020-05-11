import React, { Component } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import Footer from "./Footer";

class PhoneRigister extends Component {
  constructor(props) {
    super(props);
  }
  state = {
    userName: "",
    userPhone: "",
    userPasswrd: "",
    errorMessage: "",
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
            userName: this.state.userName,
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
    const {
      userName,
      userPhone,
      userPasswrd,
      userconfirm_password,
    } = this.state;
    return (
      <div className="rigister">
        <div className="container">
          <h6 className="header">Phone Register</h6>
          <div className="row">
            <div className="col-sm-12 col-lg-7">
              <form onSubmit={this.handelSubmit}>
                <input
                  type="text"
                  name="userName"
                  value={userName}
                  onChange={this.handelChange}
                  placeholder="user name"
                  required
                />

                <input
                  type="email"
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

                <button type="submit">Create account</button><br/>
                <Link className="have-account" to="/phone-login">
                  <i className="fas fa-chevron-circle-right mr-1"></i>
                  Have account
                  </Link>
              </form>
            </div>
            <div className="col-sm-12 col-lg-5">
              <div className="anouther-rigister">
                <h5>OR Rigister By</h5>
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
                  <Link to="/mail-rigister" className="mobile-account">
                    <i className="fas fa-envelope"></i>
                    email
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
        <Footer className="rigister-ffoter" />
      </div>
    );
  }
}

export default PhoneRigister;
