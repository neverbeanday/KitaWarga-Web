import React from "react";
import { Divider } from "antd";
import "./index.scss";

const HeadingDashboard = prop => {
  return (
    <div className="heading-dashboard-wrapper">
      <h1>{prop.heading}</h1>
      <p>{prop.content}</p>
      <Divider />
    </div>
  );
};

export default HeadingDashboard;
