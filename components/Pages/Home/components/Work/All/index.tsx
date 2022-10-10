import React, { useState } from "react";

import Modal from "@components//Modal";
import { Button } from "antd";

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
        maskClosable={true}
        showCloseIcon={true}
      >
        Content Tab All
      </Modal>
    </div>
  );
};

export default All;
