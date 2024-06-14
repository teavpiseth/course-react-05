import { Col, Row } from "antd";
import React from "react";

const Category = React.memo(function Category({ categoryList }) {
  const list = categoryList?.filter((cate) => cate?.ParentsId === 0);
  return (
    <div style={{ maxWidth: 1100, margin: "auto", padding: 20 }}>
      <h2 style={{ fontWeight: 400, margin: "10px 0" }}>CATEGORY</h2>
      <Row>
        {list?.map((cate) => {
          return (
            <Col
              style={{ marginBottom: 10 }}
              xs={12}
              sm={12}
              md={6}
              lg={6}
              xl={6}
              key={cate?.Id}
              onClick={() => {}}
            >
              <div
                className="animate__animated animate__fadeInLeft"
                style={{
                  margin: "5px",
                  height: "100%",
                  textAlign: "center",
                  cursor: "pointer",
                  position: "relative",
                  boxShadow: "-1px 11px 9px -10px #93a7c3b8",
                  borderRadius: 10,
                  border: "1px solid #e6ebef",
                }}
              >
                <img
                  style={{ maxWidth: "100%", maxHeight: 80, margin: "auto" }}
                  src={"https://piseth.site/api/get-image/" + cate?.Image}
                />
                <span
                  style={{
                    display: "block",
                    position: "absolute",
                    bottom: 0,
                    width: "100%",
                    background: "rgb(41 124 213 / 9%)",
                  }}
                >
                  {cate.Name}
                </span>
              </div>
            </Col>
          );
        })}
      </Row>
    </div>
  );
});

export default Category;
