import React, { Component } from "react";
import axios from "axios";

export default class Dashboard extends Component {
  handelLogout = () => {
    axios
      .delete("http://jsonplaceholder.typicode.com/users/1", {
        withCredentials: true,
      })
      .then((response) => {
        console.log(response);
        this.props.LogoutFunction();
      })
      .catch((error) => {
        console.log(error);
      });
  };

  render() {
    const { logedInstatus, user, id } = this.props;
    console.log(logedInstatus);
    console.log(user);
    return (
      <div className="dashboard">
        {/* <h2>{logedInstatus}</h2> */}
        {/* <button onClick={this.handelLogout}>log out</button> */}
        <div className="container">
          <h6 className="header">User Information</h6>
          <div className="row">
            <div className="col-sm-12 col-lg-7">
              <div className="user-information p-3">
                <div className="user-info-img">
                  <img className="profile-image" src="./images/avatar.png" />
                </div>
                <div className="user-info-content">
                  <h5>Omar Ali</h5>
                  <p>omarasmar9699@gmail.com</p>
                  <p>01098586783</p>
                </div>
                <div className="clear"></div>
              </div>
              <div className="user-favorite mt-5">
                <h6 className="header">User favorite</h6>
                <div class="card mb-3">
                  <img
                    class="card-img-top"
                    src="./images/frozen.png"
                    alt="Card image cap"
                  />
                  <div class="card-body">
                    <h5 class="card-title">Card title</h5>
                    <p class="card-text">
                      This is a wider card with supporting text below as a
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-sm-12 col-lg-5">
              <form>
                <input />
              </form>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
