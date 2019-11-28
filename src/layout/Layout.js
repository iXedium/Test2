import React /*,{ useState, Suspense }*/ from  "react";
import { Route, Switch, withRouter, Redirect } from "react-router-dom";
// import { connect } from "react-redux";

import SideButton from "../components/side.button";
import Header from "./Header";
import * as images from "../assets/images";
import Dashboard from "../containers/Dashboard";
import Organisations from "../containers/Organisations";
import Patients from "../containers/Patients";
import Staff from "../containers/Staff";
import Settings from "../containers/Settings";

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
        {/* <Route path="/logout" component={Logout} />
        <Route path="/auth" render={props => <Auth {...props} />} /> */}
        <Route path="/" exact render={props => <Dashboard {...props} />} />
        <Redirect to="/" />
      </Switch>
    );
  }

  return (
    <React.Fragment>
      <Header />
      <div className="x-main">
        <div className="x-side">
          <SideButton
            title="Dashboard"
            imageSource={images.dash_img}
            link="/dashboard"
          ></SideButton>
          <SideButton
            title="Organisations"
            imageSource={images.org_img}
            link="/organisations"
          ></SideButton>
          <SideButton
            title="Staff"
            imageSource={images.stf_img}
            link="/staff"
          ></SideButton>
          <SideButton
            title="Patients"
            imageSource={images.pat_img}
            link="/patients"
          ></SideButton>
          <SideButton
            title="Settings"
            imageSource={images.set_img}
            link="/settings"
          ></SideButton>
        </div>
        <div className="x-content">{routes}</div>
      </div>
    </React.Fragment>
  );
};

export default withRouter(Layout);
