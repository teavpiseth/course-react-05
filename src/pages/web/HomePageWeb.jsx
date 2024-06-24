import Slide from "../../master-layout-web/Slide";
import CategoryList from "../../master-layout-web/CategoryList";
import Product from "../../master-layout-web/Product";
import React, { useEffect, useState } from "react";

const HomePageWeb = React.memo(function HomePageWeb() {
  return (
    <div style={{ width: "100%" }}>
      <Slide />
      <CategoryList />
      <Product />
    </div>
  );
});

export default HomePageWeb;
