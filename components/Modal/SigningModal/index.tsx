import React from "react";

import Modal from "@components//Modal";
import LoadingIcon from "@components//LoadingIcon";
import EllipsisText from "@components//EllipsisText";

type SigningModalProps = {
  visible: boolean;
};

const SigningModal = ({ visible }: SigningModalProps) => {
  return (
    <Modal visible={visible} showCloseIcon={false} centered>
      <div className="signing-modal">
        <EllipsisText className="title" text="Signing Mesage" />
        <EllipsisText
          className="sub-title"
          text="Please accept the signature request on your wallet"
        />
        <LoadingIcon />
      </div>
    </Modal>
  );
};

export default SigningModal;
