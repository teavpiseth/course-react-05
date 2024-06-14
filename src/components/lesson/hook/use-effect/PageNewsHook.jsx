import { Modal } from "antd";
import React, { useEffect, useState } from "react";
import Readmore from "./Readmore";

export default function PageNewsHook() {
  const [isReadMore, setIsReadMore] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [openConfirmModal, setOpenConfirmModal] = useState(false);

  // setTimeout(() => {
  //   setIsModalOpen(true)
  // },5000)
  useEffect(function () {
    setTimeout(() => {
      setIsModalOpen(true);
      console.log("Modal new")
    }, 5000);
  }, []);

  useEffect(function () {
    console.log(" modal confirm")
  }, [openConfirmModal]);
  return (
    <div>
      <Modal
        title="confirmation"
        open={openConfirmModal}
        onCancel={() => {}}
        onOk={() => {
          setIsReadMore(true);
          setOpenConfirmModal(false);
        }}
        // onClose={() => setIsReadMore(false)}
      >
        <p>Are you sure to read more</p>
      </Modal>
      <Modal
        title="Basic Modal"
        open={isModalOpen}
        onCancel={() => setIsModalOpen(false)}
      >
        <p>Some contents...</p>
        <p>Some contents...</p>
        <p>Some contents...</p>
      </Modal>{" "}
      SampleSampleSample SampleSample SampleSampleSample SampleSampleSample
      SampleSample SampleSampleSample SampleSampleSample SampleSample
      SampleSampleSample SampleSampleSample SampleSample SampleSampleSample
      SampleSampleSample SampleSample SampleSampleSample SampleSampleSample
      SampleSample SampleSampleSample SampleSampleSample SampleSample
      SampleSampleSample SampleSampleSample SampleSample SampleSampleSample
      SampleSampleSample SampleSample SampleSampleSample SampleSampleSample
      SampleSample SampleSampleSample SampleSampleSample SampleSample
      SampleSampleSample SampleSampleSample SampleSample SampleSampleSample
      <button onClick={() => setOpenConfirmModal(isReadMore ? false: true)}>Read More</button>
      {isReadMore && <Readmore />}
    </div>
  );
}
