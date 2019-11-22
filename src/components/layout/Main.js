import React, { useState } from "react";

import SideButton from "../side.button";
import Header from "./Header";
import {
  dash_img,
  set_img,
  stf_img,
  pat_img,
  org_img
} from "../../assets/images";
import Dashboard from "./Dashboard";

const Main = props => {
  const [page, setPage] = useState(1);
  return (
    <React.Fragment>
      <Header />
      <div className="x-main">
        <div className="x-side">
          <SideButton
            title="Dashboard"
            imageSource={dash_img}
            active={page === 1}
            onClick={() => setPage(1)}
          ></SideButton>
          <SideButton
            title="Organisations"
            imageSource={org_img}
            active={page === 2}
            onClick={() => setPage(2)}
          ></SideButton>
          <SideButton
            title="Staff"
            imageSource={stf_img}
            active={page === 3}
            onClick={() => setPage(3)}
          ></SideButton>
          <SideButton
            title="Patients"
            imageSource={pat_img}
            active={page === 4}
            onClick={() => setPage(4)}
          ></SideButton>
          <SideButton
            title="Settings"
            imageSource={set_img}
            active={page === 5}
            onClick={() => setPage(5)}
          ></SideButton>
        </div>
        <div className="x-content">
          <Dashboard/>
        </div>
      </div>
    </React.Fragment>
  );
};

export default Main;
