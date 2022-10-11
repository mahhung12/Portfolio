import { Row } from "antd";
import React, { ReactNode } from "react";

type ModalContent = {
  breadcrumb?: string | any;
  title?: string;
  status?: string;
  assignee?: string;
  tech?: string | any;
  content?: ReactNode | any;
};
const ModalContentCustom = ({
  breadcrumb,
  title,
  status,
  assignee,
  tech,
  content,
  ...props
}: ModalContent) => {
  return <Row className="modal-content-custom"></Row>;
};

export default ModalContentCustom;
