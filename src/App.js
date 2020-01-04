import React, { Suspense, useEffect } from "react";
import { BrowserRouter, withRouter } from "react-router-dom";
import { connect } from "react-redux";
import firebase from "firebase";


import * as actions from "./store/actions/index";
// import Login from "./containers/Auth/Login";

const Layout = React.lazy(() => {
  return import("./layout/Layout");
});

firebase.initializeApp({
  apiKey: "AIzaSyAxNywiabqYN2H_21YB76E4QPQBk0dgZ3U",
  authDomain: "viscgo-sample.firebaseapp.com"
});


const App = props => {
  useEffect(() => {
    props.onTryAutoSignin();
  }, [props]);

  // let layout = props.isAuthenticated ? <Layout isAuthenticated /> : <Login />;

  return (
    <BrowserRouter>
      <Suspense fallback={<div className="x-loader">Loading...</div>}>
        {/* <div className="x-loader">Loading...</div> */}
        <Layout isAuthenticated={props.isAuthenticated} />
      </Suspense>
    </BrowserRouter>
  );
};

const mapStateToProps = state => {
  return {
    isAuthenticated: state.auth.token !== null
  };
};

const mapDispatchToProps = dispatch => {
  return {
    onTryAutoSignin: () => dispatch(actions.authCheckState())
  };
};

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(App));
