import React, { useState } from "react";
import { PoweroffOutlined, RightOutlined } from "@ant-design/icons";
import { Button, Flex, Modal } from "antd";
import image1 from "@/images/user/man/51.jpg";
const App = () => {
  const [loadings, setLoadings] = useState([]);
  const enterLoading = (index) => {
    setLoadings((prevLoadings) => {
      const newLoadings = [...prevLoadings];
      newLoadings[index] = true;
      return newLoadings;
    });
    setTimeout(() => {
      setLoadings((prevLoadings) => {
        const newLoadings = [...prevLoadings];
        newLoadings[index] = false;
        return newLoadings;
      });
    }, 6000);
  };

  const [open, setOpen] = useState(false);
  return (
    <Flex gap="small" vertical>
      <Flex gap="small" align="center" wrap>
        <Button
          onClick={() => setOpen(true)}
          type="primary"
          icon={<RightOutlined />}
          loading={false}
        >
          Open Modal
        </Button>

        <Modal
          title="Modal 1000px width"
          centered
          open={open}
          onOk={() => setOpen(false)}
          onCancel={() => setOpen(false)}
          width={1000}
          afterClose={() => console.log("after close")}
          closeIcon={false}
        >
          <img src={image1} />
          <p>some contents...</p>
          <p>some contents...</p>
          <p>some contents...</p>
        </Modal>
      </Flex>
    </Flex>
  );
};
export default App;
