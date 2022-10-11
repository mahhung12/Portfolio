import React, { ReactNode } from "react";
import { Breadcrumb, Row } from "antd";

import EllipsisText from "@components//EllipsisText";
import ItemWithLabel from "@components//ItemWithLabel";

import { PROJECT_PROPERTIES } from "constants/author";

type ModalContent = {
  breadcrumbs?: unknown | any;
  title?: string;
  status?: string;
  assignee?: string;
  dueDate?: string;
  tech?: string | any;
  content?: ReactNode | any;
};

const { Item } = Breadcrumb;
const { STATUS, ASSIGNEE, DUEDATE, TECHNIQUE } = PROJECT_PROPERTIES;

const ModalContentCustom = ({
  breadcrumbs,
  title,
  status,
  assignee,
  dueDate,
  tech,
  content,
  ...props
}: ModalContent) => {
  return (
    <Row className="modal-content-custom">
      <Breadcrumb className="project-breadcrumb">
        {breadcrumbs?.map((breadcrumb: string, idx: number) => (
          <Item key={idx}>{breadcrumb}</Item>
        ))}
      </Breadcrumb>

      <EllipsisText text={title} className="project-title" />

      <Row className="project-properties">
        <ItemWithLabel className="status" label={STATUS}>
          {status}
        </ItemWithLabel>
        <ItemWithLabel className="assignee" label={ASSIGNEE}>
          {assignee}
        </ItemWithLabel>
        <ItemWithLabel className="due_date" label={STATUS}>
          {dueDate}
        </ItemWithLabel>
        <ItemWithLabel className="technique" label={TECHNIQUE}>
          {tech}
        </ItemWithLabel>
      </Row>
    </Row>
  );
};

export default ModalContentCustom;
