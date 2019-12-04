import React from "react";
import { Route, Switch, withRouter, Redirect } from "react-router-dom";
// import { connect } from "react-redux";


import Header from "./Header";
import SideBar from "./SideBar";


import Dashboard from "../components/Dashboard";
import Organisations from "../components/Organisations";
import Patients from "../components/Patients";
import Staff from "../components/Staff";
import Settings from "../components/Settings";
// import Login from "../containers/Login";

const Layout = props => {
  // const [page, setPage] = useState(1);

  // if not authorised:
  let routes = (
    <Switch>
      {/* <Route path="/auth" render={props => <Auth {...props} />} /> */}
      {/* <Route path="/" exact component={BurgerBuilder} /> */}
      <Redirect to="/" />
    </Switch>
  );
  // if authorised:
  if (props.isAuthenticated) {
    routes = (
      <Switch>
        <Route path="/dashboard" render={props => <Dashboard {...props} />} />
        <Route
          path="/organisations"
          render={props => <Organisations {...props} />}
        />
        <Route path="/staff" render={props => <Staff {...props} />} />
        <Route path="/patients" render={props => <Patients {...props} />} />
        <Route path="/settings" render={props => <Settings {...props} />} />
        {/* <Route path="/logout" component={Logout} /> */}
        <Route path="/" exact render={props => <Dashboard {...props} />} />
        <Redirect to="/" />
      </Switch>
    );
  }

  return (
    <React.Fragment>
      <Header />
      <div className="x-main">
        <SideBar />
        <main className="x-content">
          {routes}
        </main>
      </div>
    </React.Fragment>
  );
};

export default withRouter(Layout);
