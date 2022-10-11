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
        <ModalContentCustom />
      </Modal>
    </div>
  );
};

export default All;
