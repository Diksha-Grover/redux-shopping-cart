import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";
import "./App.css";
import { connect } from "react-redux";
import Navbar from "./components/Navbar/Navbar";
import Products from "./components/Products/Products";
import Cart from "./components/Cart/Cart";
import SingleItem from "./components/SingleItem/SingleItem";

function App({ current }) {
  return (
    <Router>
      <div className="app">
        <Navbar />
        <Switch>
        {/* <Switch /> component will only render the first route that matches/includes the path.  */}
          <Route exact path="/" component={Products} />
          <Route exact path="/cart" component={Cart} />
          {!current ? (
          // here we are checking of we have loaded the item or not. if we have not loaded the item then it will redirect us "/" path 
            <Redirect to="/" />
          ) : (
            <Route exact path="/product/:id" component={SingleItem} />
          )}
        </Switch>
      </div>
    </Router>
  );
}

const mapStateToProps = (state) => {
  return {
    current: state.shop.currentItem,
    // we have the access to the currentItem because we have connected the mapStateProps to Store
  };
};

export default connect(mapStateToProps)(App);
// connect() function connects a React component to a Redux store.
// It provides its connected component with the pieces of the data it needs from the store, and the functions it can use to dispatch actions to the store.