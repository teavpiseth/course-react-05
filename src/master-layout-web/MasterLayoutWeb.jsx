import HeaderWeb from "./HeaderWeb";
import FooterWeb from "./FooterWeb";
import { Outlet } from "react-router";
import React from "react";

const MasterLayoutWeb = React.memo(function MasterLayoutWeb() {
  return (
    <div style={{ width: "100%", overflow: "hidden" }}>
      <HeaderWeb />
      <Outlet />
      <FooterWeb />
    </div>
  );
});

export default MasterLayoutWeb;
