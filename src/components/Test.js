import React, { Component } from "react";
import axios from "axios";

export default class Test extends Component {
  getAllCategory = () => {
    // const username = 'iOS';
    // const password = 'Daddody';
    // const token = Buffer.from(`${username}:${password}`, 'utf8').toString('base64')
    // const AuthStr = 'Basic '.concat(token);
    var session_url =
      "http://52.66.53.76:1011/api/category/categories?languageId=e44ef558-ca8e-ea11-ad15-24be050a481a";
    var username = 'iOS';
    var password = 'Daddody';
    var credentials = btoa(username + ':' + password);
    var basicAuth = 'Basic ' + credentials;
    axios
      .get(session_url, {
        headers: { 'Authorization': + basicAuth }
      },{withCredentials: true})
      .then((response) => {
        console.log(response);
      })
      .catch((error) => {
        console.log(error);
      });
  };

//   async componentDidMount(){
//     const res = await axios.get('http://52.66.53.76:1011/api/category/categories?languageId=e44ef558-ca8e-ea11-ad15-24be050a481a', {
//   // Axios looks for the `auth` option, and, if it is set, formats a
//   // basic auth header for you automatically.
//   auth: {
//     username: 'iOS',
//     password: 'Daddody'
//   }
// },{withCredentials: true,});
//   }

  render() {
    return (
      <div>
        <button onClick={this.getAllCategory}>Get all</button>
      </div>
    );
  }
}
