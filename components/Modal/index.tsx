import React, { Fragment, FC, ReactNode } from "react";
import { Modal as ModalAntd, Typography } from "antd";
import Image from "next/future/image";

import CloseIcon from "public/svg/close_icon.svg";

const { Title } = Typography;

const Modal: FC<{
  title?: string | ReactNode;
  onClose?: any;
  showCloseIcon?: boolean;
  visible: boolean;
  width?: number | string;
  maskClosable?: boolean;
  wrapClassName?: string;
  getContainer?: any;
  destroyOnClose?: boolean;
  centered?: boolean;
  children?: any;
}> = ({
  children,
  title,
  onClose,
  showCloseIcon = true,
  width,
  destroyOnClose = true,
  maskClosable,
  ...props
}) => {
  return (
    <ModalAntd
      footer={null}
      closable={false}
      onCancel={onClose}
      width={width ?? 500}
      wrapClassName="modal"
      destroyOnClose={destroyOnClose}
      maskClosable={maskClosable || showCloseIcon}
      {...props}
    >
      <div className="modal-container">
        <Image
          src={CloseIcon}
          alt=""
          onClick={onClose}
          className="modal-close-icon"
        />
        <div className="modal-wrap">
          {title && (
            <Title level={5} className="title">
              {title}
            </Title>
          )}
          {children}
        </div>
      </div>
    </ModalAntd>
  );
};

export default Modal;
