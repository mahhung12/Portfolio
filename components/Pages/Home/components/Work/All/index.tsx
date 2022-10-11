import React, { useState } from "react";
import { Button } from "antd";

import Modal from "@components//Modal";
import ModalContentCustom from "@components//Modal/ModalContentCustom";

const All = () => {
  const [visible, setVisible] = useState(false);

  const handleSetVisible = () => setVisible(true);

  const handleCloseModal = () => setVisible(false);

  return (
    <div className="all-tab">
      <Button onClick={handleSetVisible}>Open Modal</Button>
      <Modal
        visible={visible}
        width={500}
        onClose={handleCloseModal}
        showCloseIcon
        maskClosable
        centered
      >
        <ModalContentCustom
          breadcrumbs={["1", "2"]}
          title="mHung"
          status="In Progress"
          assignee="mHung"
          dueDate="Feb 17, 2022"
          tech="React JS ..."
        />
      </Modal>
    </div>
  );
};

export default All;
