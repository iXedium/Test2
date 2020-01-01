import React from "react";
import { Route, Switch, withRouter, Redirect } from "react-router-dom";

import Header from "../components/Header/Header";
import SideBar from "./SideBar";
import EmailSent from "../containers/Auth/EmailSent";

const Login = React.lazy(() => {
  return import("../containers/Auth/Login");
});
const ResetPassword = React.lazy(() => {
  return import("../containers/Auth/ResetPassword");
});
const Dashboard = React.lazy(() => {
  return import("../components/Main/Dashboard");
});
const Patients = React.lazy(() => {
  return import("../components/Main/Patients");
});
const Staff = React.lazy(() => {
  return import("../components/Main/Staff");
});
const Settings = React.lazy(() => {
  return import("../components/Main/Settings");
});
const Organisations = React.lazy(() => {
  return import("../components/Main/Organisations");
});
const Profile = React.lazy(() => {
  return import("../components/Admin/Profile");
});

const Layout = props => {

  // if not authorised:
  let routes = (
    <>
      <Switch>
        <Route path="/email-sent" render={props => <EmailSent {...props} />} />
        <Route
          path="/reset-password"
          render={props => <ResetPassword {...props} />}
        />
        <Route path="/" exact render={props => <Login {...props} />} />
        <Redirect to="/" />
      </Switch>
    </>
  );
  // if authorised:
  if (props.isAuthenticated) {
    routes = (
      <>
        <Header />
        <div className="x-main">
          <SideBar />
          <main className="x-content">
            <Switch>
              <Route
                path="/dashboard"
                render={props => <Dashboard {...props} />}
              />
              <Route
                path="/organisations"
                render={props => <Organisations {...props} />}
              />
              <Route path="/staff" render={props => <Staff {...props} />} />
              <Route
                path="/patients"
                render={props => <Patients {...props} />}
              />
              <Route
                path="/settings"
                render={props => <Settings {...props} />}
              />
              <Route path="/profile" render={props => <Profile {...props} />} />
              {/* <Route path="/logout" component={Logout} /> */}
              <Route
                path="/"
                exact
                render={props => <Dashboard {...props} />}
              />
              <Redirect to="/dashboard" />
            </Switch>
          </main>
        </div>
      </>
    );
  }

  return <>{routes}</>;
};

export default withRouter(Layout);
