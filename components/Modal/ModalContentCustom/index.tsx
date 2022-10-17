import React, { ReactNode } from "react";
import { Breadcrumb, Col, Row } from "antd";
import Image from "next/future/image";

import EllipsisText from "@components//EllipsisText";
import ItemWithLabel from "@components//ItemWithLabel";

import { PROJECT_PROPERTIES } from "constants/author";

type ModalContent = {
  image?: string | any;
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

const ModalContentCustom = ({
  image,
  breadcrumbs,
  title,
  status,
  assignee,
  position,
  date,
  tech,
  content,
  ...props
}: ModalContent) => {
  return (
    <Row className="modal-content-custom" gutter={32}>
      <Col span={24}>
        <Breadcrumb className="project-breadcrumb">
          {breadcrumbs?.map((breadcrumb: string, idx: number) => (
            <Item key={idx}>{breadcrumb}</Item>
          ))}
        </Breadcrumb>

        <EllipsisText text={title} className="project-title" />

        <Row className="project-properties">
          {status && (
            <ItemWithLabel className="status" label={STATUS}>
              {status}
            </ItemWithLabel>
          )}

          {tech && (
            <ItemWithLabel className="technique" label={TECHNIQUE}>
              {tech}
            </ItemWithLabel>
          )}

          {date && (
            <ItemWithLabel className="date" label={DATE}>
              {date}
            </ItemWithLabel>
          )}

          {position && (
            <ItemWithLabel className="position" label={POSITION}>
              {position}
            </ItemWithLabel>
          )}
        </Row>

        <Row className="project-description">
          <EllipsisText className="desc-title" text="Description" />

          <div className="desc">{content}</div>
        </Row>

        <Row className="project-preview">
          <EllipsisText className="preview-title" text="Preview" />

          <Image src={image} alt="" className="project-image" />
        </Row>
      </Col>
    </Row>
  );
};

export default ModalContentCustom;
