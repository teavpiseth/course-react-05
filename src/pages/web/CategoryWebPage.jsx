import { Card, Col, Menu, Row } from "antd";
import Meta from "antd/es/card/Meta";
import useCategoryPage from "./useCtPage";
import React from "react";

const CategoryWebPage = React.memo(function CategoryWebPage() {
  const { product, items } = useCategoryPage();

  return (
    <div style={{ maxWidth: 1100, margin: "auto", padding: 20 }}>
      <Row>
        <Col xs={24} sm={24} md={6} lg={6} xl={6}>
          <Menu
            onClick={() => {}}
            style={{
              width: 256,
            }}
            defaultSelectedKeys={["1"]}
            defaultOpenKeys={["sub1"]}
            mode="inline"
            items={items}
          />
        </Col>
        <Col xs={24} sm={24} md={18} lg={18} xl={18}>
          <Row>
            {product?.map((pro) => {
              return (
                <Col
                  key={pro.Id}
                  span={8}
                  style={{ textAlign: "center", marginBottom: 15 }}
                >
                  <Card
                    className="animate__animated animate__fadeInLeft"
                    hoverable
                    style={{
                      width: "100%",
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
                          "https://piseth.site/api/get-image/" +
                          pro?.images?.[0]
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
                </Col>
              );
            })}
          </Row>
        </Col>
      </Row>
    </div>
  );
});

export default CategoryWebPage;
