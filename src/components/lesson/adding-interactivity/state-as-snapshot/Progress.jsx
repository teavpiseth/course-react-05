import { Modal, Progress } from "antd";
import { useEffect, useState } from "react";

export default function ProgressComponent() {
  const [percent, setPercent] = useState(0);
  const [open, setOpen] = useState(true);
  useEffect(() => {
    setInterval(() => {
      console.log("Update progress");
      setPercent(percent+1);
    }, 100);
  }, []);
  return (
    <div>
       <Modal
        title={null}
        open={open}
        footer={null}
        closeIcon={null}
      >
        <p>
        <Progress percent={percent} />
        </p>
      </Modal>
      
    </div>
  );
}
