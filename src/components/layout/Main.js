import React, { useState } from "react";

import SideButton from "../side.button";
import Header from "./Header";
import {
  Dashboard,
  Settings,
  Staff,
  Patients,
  Organisations
} from "../../assets/images";

const Main = props => {
  const [page, setPage] = useState(1);
  return (
    <React.Fragment>
      <Header />
      <div className="x-main">
        <div className="x-side">
          <SideButton
            title="Dashboard"
            imageSource={Dashboard}
            active={page === 1}
            onClick={() => setPage(1)}
          ></SideButton>
          <SideButton
            title="Organisations"
            imageSource={Organisations}
            active={page === 2}
            onClick={() => setPage(2)}
          ></SideButton>
          <SideButton
            title="Staff"
            imageSource={Staff}
            active={page === 3}
            onClick={() => setPage(3)}
          ></SideButton>
          <SideButton
            title="Patients"
            imageSource={Patients}
            active={page === 4}
            onClick={() => setPage(4)}
          ></SideButton>
          <SideButton
            title="Settings"
            imageSource={Settings}
            active={page === 5}
            onClick={() => setPage(5)}
          ></SideButton>
        </div>
        <div className="x-content">content</div>
      </div>
    </React.Fragment>
  );
};

export default Main;
