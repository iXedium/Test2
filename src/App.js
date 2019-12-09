import React, { Suspense, useEffect } from "react";
import { BrowserRouter, withRouter } from "react-router-dom";
import { connect } from "react-redux";

import * as actions from "./store/actions/index";
import Login from "./containers/Auth/Login";

const Layout = React.lazy(() => {
  return import("./layout/Layout");
});

const App = props => {
  useEffect(() => {
    props.onTryAutoSignup();
    // console.log('App useEffect')
  }, [props]);

  // const [isAuthenticated, setIsAuthenticated] = useState(false);
  let layout = props.isAuthenticated ? <Layout isAuthenticated /> : <Login />;

  return (
    <BrowserRouter>
      <Suspense fallback={<p>Loading...</p>}>{layout}</Suspense>
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
    onTryAutoSignup: () => dispatch(actions.authCheckState())
  };
};

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(App));
