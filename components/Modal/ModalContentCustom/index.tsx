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
  position?: string;
  date?: string;
  tech?: string | any;
  content?: ReactNode | any;
};

const { Item } = Breadcrumb;
const { STATUS, ASSIGNEE, POSITION, DATE, TECHNIQUE } = PROJECT_PROPERTIES;

const ModalContentCustom = ({ breadcrumbs, title, status, assignee, position, date, tech, content, ...props }: ModalContent) => {
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

        <ItemWithLabel className="technique" label={TECHNIQUE}>
          {tech}
        </ItemWithLabel>

        <ItemWithLabel className="date" label={DATE}>
          {date}
        </ItemWithLabel>

        <ItemWithLabel className="position" label={POSITION}>
          {position}
        </ItemWithLabel>
      </Row>

      <Row className="project-description">
        <EllipsisText className="desc-title" text="Description" />

        <div className="desc">{content}</div>
      </Row>

      <Row className="project-preview">
        <EllipsisText className="preview-title" text="Preview" />
      </Row>
    </Row>
  );
};

export default ModalContentCustom;
