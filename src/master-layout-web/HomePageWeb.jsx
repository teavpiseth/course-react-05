import Slide from "./Slide";
import Category from "./Category";
import Product from "./Product";
import { useEffect, useState } from "react";

export default function HomePageWeb() {
  const [categoryList, setCategoryList] = useState([])

  useEffect(() => {
    fetch("https://piseth.site/api/web/category/get-list?")
      .then((response) => {
        // Check if the response was successful
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        // Convert the response to JSON
        return response.json();
      })
      .then((data) => {
        // Log the data to the console
        console.log("Data:", data);
        setCategoryList(data?.list)
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
}
