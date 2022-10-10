import React, { ReactNode } from "react";
import classNames from "classnames";

import ModalComponent from "components/Modal";
import AppButton from "components/AppButton";

type ModalConfirmProps = {
  visible: boolean;
  onClose?: () => void;
  onConfirm?: any;
  title?: string | ReactNode;
  description?: any;
  confirmText?: any;
  afterClose?: any;
  className?: string;
  innerHtml?: boolean;
  noCancel?: boolean;
  loading?: boolean;
};

const ModalConfirm = ({
  visible,
  onClose,
  onConfirm,
  title,
  description,
  confirmText,
  className,
  innerHtml,
  noCancel,
  loading,
  ...props
}: ModalConfirmProps) => {
  return (
    <ModalComponent
      visible={visible}
      width={550}
      onClose={onClose}
      {...props}
      centered
    >
      <div className={classNames("confirm-modal", className)}>
        <div className="title">{title}</div>
        {innerHtml ? (
          <div
            className="description"
            dangerouslySetInnerHTML={{ __html: description }}
          />
        ) : (
          <div className="description">{description}</div>
        )}
        {noCancel ? (
          <AppButton
            className="button-proceed"
            onClick={onConfirm}
            text={confirmText || "Delete"}
            variant="primary"
            loading={loading}
            disabled={loading}
          />
        ) : (
          <div className="button-group">
            <AppButton
              className="btn-close"
              onClick={onClose}
              text="Cancel"
              disabled={loading}
            />

            <AppButton
              className="button-confirm"
              onClick={onConfirm}
              text={confirmText || "Delete"}
              variant="primary"
              disabled={loading}
              loading={loading}
            />
          </div>
        )}
      </div>
    </ModalComponent>
  );
};

export default ModalConfirm;
