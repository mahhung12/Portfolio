import React, { Fragment, FC, ReactNode } from "react";
import { Modal as ModalAntd, Typography } from "antd";
import Image from "next/image";

import CloseCircleLightIcon from "public/image/close_circle_light_icon.png";

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
      <Fragment>
        {showCloseIcon && (
          <>
            <Image
              src={CloseCircleLightIcon}
              alt=""
              onClick={onClose}
              className="modal-close-mobile-icon cursor-pointer"
            />
          </>
        )}
        <div className="modal-wrap">
          {title && (
            <Title level={5} className="title">
              {title}
            </Title>
          )}
          {children}
        </div>
      </Fragment>
    </ModalAntd>
  );
};

export default Modal;
