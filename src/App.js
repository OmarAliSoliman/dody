import React from "react";
import "./sass/style.scss";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

// sass
import './sass/style.scss';

// components
import DeskTopNavBar from "./components/DeskTopNavBar";
import MobileNavBar from "./components/MobileNavBar";

// pages
import Scroll from './components/Scroll';
import Products from "./pages/Products";
import ProductDetils from "./pages/ProductDetils";
import Cart from './pages/Cart';

function App() {
  return (
    <Router>
      <div className="App">
        <DeskTopNavBar />
        <Switch>
          <Route path="/" exact component={Products} />
          <Route path="/product-details/:id" exact component={ProductDetils} />
          <Route path="/cart" exact component={Cart} />
          <Route path="/scroll-feed" exact component={Scroll} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
