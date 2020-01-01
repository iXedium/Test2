import React from "react";
import GridItem from "../UI/GridItem";

const Dashboard = () => {
  return (
    <div className="x-dashboard">
      <h1 className="x-page-title">Dashboard</h1>
      <p className="x-breadcrumb">BREADCRUMB</p>
      <div className="x-grid">
        <GridItem
          name="Organisations"
          number={123}
          exact
          link="/organisations"
        />
        <GridItem name="Staff" number={10} exact link="/staff" />
        <GridItem name="Patients" number={6} exact link="/patients" />
        <GridItem name="Data Logs" number={7} exact link="/data-logs" />
      </div>
    </div>
  );
};

export default Dashboard;
