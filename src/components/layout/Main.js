import React, { useState } from "react";

import SideButton from "../side.button";
import Header from "./Header";

const Main = props => {
  const [page, setPage] = useState(1);
  return (
    <React.Fragment>
      <Header/>
      <div className="x-main">
        <div className="x-side">
          <SideButton
            title="Dashboard"
            active={page === 1}
            onClick={() => setPage(1)}
          ></SideButton>
          <SideButton
            title="Organisations"
            active={page === 2}
            onClick={() => setPage(2)}
          ></SideButton>
          <SideButton
            title="Staff"
            active={page === 3}
            onClick={() => setPage(3)}
          ></SideButton>
          <SideButton
            title="Patients"
            active={page === 4}
            onClick={() => setPage(4)}
          ></SideButton>
          <SideButton
            title="Settings"
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
