import React from "react";

const Dashboard = () => {
  return (
    <div className="x-dashboard">
      <h1 className="x-page-title">Dashboard</h1>
      <p className="x-breadcrumb">BREADCRUMB</p>
      <div className="x-grid">
        <div className="x-grid-item">
          <p className="x-grid-number">123</p>
          <div className="x-grid-line"></div>
          <p className="x-grid-title">Organisations</p>
        </div>
        <div className="x-grid-item">
          <p className="x-grid-number">10</p>
          <div className="x-grid-line"></div>
          <p className="x-grid-title">Staff</p>
        </div>
        <div className="x-grid-item">
          <p className="x-grid-number">6</p>
          <div className="x-grid-line"></div>
          <p className="x-grid-title">Patients</p>
        </div>
        <div className="x-grid-item">
          <p className="x-grid-number">7</p>
          <div className="x-grid-line"></div>
          <p className="x-grid-title">Data Logs</p>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
