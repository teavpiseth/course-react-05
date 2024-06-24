import {
  WebContext,
  useWebContext,
} from "@/contextProvider/webContext/WebContext";
import axios from "axios";
import { useContext, useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";

const _items = [
  {
    key: "sub1",
    label: "Apple",
  },
  {
    key: "2",
    label: "Nokai",
  },
];
function useCategoryPage() {
  const [product, setProduct] = useState([]);

  const { categoryList } = useWebContext();
  const [category, setCategory] = useState(categoryList);
  const [items, setItems] = useState(_items);
  const [searchParams] = useSearchParams();
  const cateId = searchParams.get("cate-id");

  function handleItem(category) {
    return category
      .filter((cate) => cate?.ParentsId === Number(cateId))
      .map((cateItem) => {
        return {
          key: cateItem?.Name,
          label: cateItem?.Name,
        };
      });
  }

  useEffect(() => {
    setItems(handleItem(categoryList));
  }, []);

  useEffect(() => {
    if (category?.length > 0) {
      const idGroupCate = category
        ?.filter((item) => item.ParentsId === Number(cateId))
        .map((item) => item.Id)
        .join(",");

      axios({
        method: "get",
        url:
          "https://piseth.site/api/web/product/get-list?pageSize=10&page=1&groupCategory=" +
          idGroupCate,
      }).then(function (response) {
        console.log(response);
        setProduct(response.data.list);
      });
    }
  }, [category]);

  return {
    product,
    items,
    setProduct,
  };
}

export default useCategoryPage;
