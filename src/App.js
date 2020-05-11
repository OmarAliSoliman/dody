import React, { Component } from "react";
import "./sass/style.scss";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import axios from "axios";

// sass
import "./sass/style.scss";

// components
import MobileNavBar from "./components/MobileNavBar";
import MailRegister from "./components/Mail-regiser";
import PhoneRigister from "./components/Phone-rigister";
import Maillogin from "./components/Mail-login";
import Phonelogin from './components/Phone-login';

// pages
import Scroll from "./components/Scroll";
import Products from "./pages/Products";
import ProductDetils from "./pages/ProductDetils";
import Cart from "./pages/Cart";
import Dashboard from "./components/Dashboard";
import Test from "./components/Test";
import SubCategory from "./components/SubCategory";
import CartIcon from './components/CartIcon';

class App extends Component {
  state = {
    logedInStatus: "NOT_LOGED_IN",
    user: {},
    id: "",
  };

  handelLOgedIN = (data) => {
    this.setState({
      logedInStatus: "LOGED_IN",
      user: data.user,
      id: data.id,
    });
  };

  // cheackUserLogin=()=>{
  //   axios.get('https://jsonplaceholder.typicode.com/users', {withCredentials : true}).then((response)=>{
  //     console.log(response);
  //     if(response.status === 200 && this.state.logedInStatus === "NOT_LOGED_IN"){
  //       this.setState({
  //         logedInStatus: "LOGED_IN"
  //       })
  //     }
  //   }).catch((error)=>{
  //     console.log(error);
  //   })
  // }

  // componentDidMount=()=>{
  //   this.cheackUserLogin();
  // }

  LogoutFunction = () => {
    this.setState({
      logedInStatus: "NOT_LOGED_IN",
      user: {},
    });
  };

  render() {
    return (
      <Router>
        <div className="App">
          <MobileNavBar />
          <CartIcon />
          <Switch>
            <Route path="/" exact component={Products} />
            <Route
              path="/product-details/:id"
              exact
              component={ProductDetils}
            />
            <Route path="/cart" exact component={Cart} />
            <Route path="/scroll-feed" exact component={Scroll} />
            <Route
              path="/mail-rigister"
              exact
              render={(props) => (
                <MailRegister
                  {...props}
                  id={this.state.id}
                  handelLOgedIN={this.handelLOgedIN}
                  susefulAut={this.state.logedInStatus}
                />
              )}
            />
            <Route
              path="/phone-rigister"
              exact
              render={(props) => (
                <PhoneRigister
                  {...props}
                  id={this.state.id}
                  handelLOgedIN={this.handelLOgedIN}
                  susefulAut={this.state.logedInStatus}
                />
              )}
            />
            <Route
              path="/dashboard"
              exact
              render={(props) => (
                <Dashboard
                  {...props}
                  id={this.state.id}
                  user={this.state.user}
                  handelLOgedIN={this.handelLOgedIN}
                  logedInstatus={this.state.logedInStatus}
                  LogoutFunction={this.LogoutFunction}
                />
              )}
            />
            <Route
              path="/mail-login"
              exact
              render={(props) => (
                <Maillogin
                  {...props}
                  id={this.state.id}
                  user={this.state.user}
                  handelLOgedIN={this.handelLOgedIN}
                  logedInStatus={this.state.logedInStatus}
                />
              )}
            />
                  <Route
              path="/phone-login"
              exact
              render={(props) => (
                <Phonelogin
                  {...props}
                  id={this.state.id}
                  user={this.state.user}
                  handelLOgedIN={this.handelLOgedIN}
                  logedInStatus={this.state.logedInStatus}
                />
              )}
            />
            <Route path="/test" component={Test} />
            <Route path="/subcategory" component={SubCategory} />
          </Switch>
        </div>
      </Router>
    );
  }
}

export default App;

// we use app component to make login and register and cheack if the user is logined in because this is the parent component and then all componnetn insted it see that

// axios.get('https://jsonplaceholder.typicode.com/users') sessions url here
