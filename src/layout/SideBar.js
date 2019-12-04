import React from "react";

import SideButton from "../components/UI/SideButton";
import * as images from "../assets/images";

const SideBar = () => {
  return (
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
  );
};

export default SideBar;
