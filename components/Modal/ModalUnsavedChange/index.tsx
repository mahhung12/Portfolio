import React from "react";
import { useRouter } from "next/router";

import ModalConfirm from "components/Modal/ModalConfirm";

type ModalUnsavedChangeProps = {
  visible: boolean;
  onClose?: any;
  backUrl: string;
  afterClose?: any;
  isModalForm?: boolean;
  confirmModalForm?: any;
  setValueChange?: any;
};

const ModalUnsavedChange = ({
  visible,
  onClose,
  backUrl,
  afterClose,
  isModalForm,
  confirmModalForm,
  setValueChange,
}: ModalUnsavedChangeProps) => {
  const router = useRouter();

  const onConfirm = () => {
    if (!isModalForm) {
      router.push(backUrl);
      setValueChange && setValueChange(false);
    } else {
      onClose();
      confirmModalForm();
    }
  };

  return (
    <ModalConfirm
      visible={visible}
      onClose={onClose}
      onConfirm={onConfirm}
      afterClose={afterClose}
      title="Unsaved Change"
      confirmText="Leave Page"
      description="If you leave this page, any unsaved changes will be lost."
    />
  );
};

export default ModalUnsavedChange;
