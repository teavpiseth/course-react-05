import { Card, Col, Row } from "antd";
import React, { useEffect, useState } from "react";
import Meta from "antd/es/card/Meta";
import { Link } from "react-router-dom";
import baseService from "@/services/BaseService";

const Product = React.memo(function Product() {
  const [product, setProduct] = useState([]);

  async function fetchProduct() {
    const data = await baseService.get(
      "https://piseth.site/api/web/product/get-list?pageSize=10&page=1"
    );

    setProduct(data.list);
  }
  useEffect(() => {
    fetchProduct();
  }, []);
  return (
    <div style={{ maxWidth: 1100, margin: "auto", padding: 20 }}>
      <h2 style={{ fontWeight: 400, margin: "0px 0" }}>Product</h2>
      <Row>
        {product?.map((pro) => {
          return (
            <Col
              key={pro.Id}
              span={6}
              style={{ textAlign: "center", marginBottom: 15 }}
            >
              <Link to="/detail" state={pro}>
                <Card
                  className="animate__animated animate__fadeInLeft"
                  hoverable
                  style={{
                    width: 240,
                  }}
                  onClick={() => {}}
                  cover={
                    <img
                      style={{
                        maxWidth: "100%",
                        maxHeight: 100,
                        objectFit: "contain",
                        marginTop: 15,
                      }}
                      src={
                        "https://piseth.site/api/get-image/" + pro?.images?.[0]
                      }
                    />
                  }
                >
                  <Meta
                    title={pro?.Name}
                    style={{
                      marginBottom: 25,
                    }}
                  />
                  {Number(pro?.DiscountAmount) > 0 && (
                    <span
                      style={{
                        color: "blue",
                        display: "block",
                        border: "1px solid",
                        marginBottom: 10,
                        borderRadius: 5,
                      }}
                    >
                      {pro?.DiscountAmount}$ Off
                    </span>
                  )}
                  <div
                    style={{
                      color: "#f34770",
                      textAlign: "left",
                      width: "100%",
                      display: "flex",
                      justifyContent: "space-between",
                      marginBottom: 10,
                    }}
                  >
                    <span> {pro?.NetPrice} $</span>
                    {Number(pro?.DiscountAmount) > 0 && (
                      <span
                        style={{
                          color: "black",
                          marginLeft: 30,
                          textDecoration: "line-through",
                        }}
                      >
                        {pro?.Price} $
                      </span>
                    )}
                  </div>
                  <span
                    style={{
                      textAlign: "left",
                      width: "100%",
                      display: "block",
                    }}
                  >
                    {pro?.Description}
                  </span>
                </Card>
              </Link>
            </Col>
          );
        })}
      </Row>
    </div>
  );
});

export default Product;
