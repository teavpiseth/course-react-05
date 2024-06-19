import Slide from "../../master-layout-web/Slide";
import Category from "../../master-layout-web/Category";
import Product from "../../master-layout-web/Product";
import React, { useEffect, useState } from "react";

const HomePageWeb = React.memo(function HomePageWeb() {
  const [categoryList, setCategoryList] = useState([]);

  useEffect(() => {
    fetch("https://piseth.site/api/web/category/get-list?")
      .then((response) => {
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        return response.json();
      })
      .then((data) => {
        console.log("Data:", data);
        setCategoryList(data?.list);
      })
      .catch((error) => {
        // Handle any errors
        console.error("Error:", error);
      });
  }, []);

  return (
    <div style={{ width: "100%" }}>
      <Slide />
      <Category categoryList={categoryList} />
      <Product />
    </div>
  );
});

export default HomePageWeb;
