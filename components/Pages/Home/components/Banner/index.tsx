import React from "react";
import { Button, Row, Tooltip } from "antd";
import Image from "next/image";
import classNames from "classnames";

import ItemWithLabel from "@components//ItemWithLabel";

import { AUTHOR_SOCIAL_MEDIA } from "constants/author";

export interface BannerProps {
  imageWidth?: number;
  imageHeight?: number;

  bannerClassName?: string;
}

const Banner = ({
  imageWidth = 250,
  imageHeight = 250,
  bannerClassName,
}: BannerProps) => {
  const authorName = "Manh Hung";
  const authorDesc = "I'm a Web Developer";

  return (
    <div className={classNames("banner-container", { bannerClassName })}>
      <Row className="main-content">
        <Image
          src=""
          alt=""
          width={imageWidth}
          height={imageHeight}
          className="avatar"
        />
        <h2>{authorName}</h2>
        <h3>{authorDesc}</h3>
      </Row>

      <div className="social-contain">
        {AUTHOR_SOCIAL_MEDIA.map((media: any, index: number) => {
          return (
            <div className="social" key={index}>
              <Image width={20} height={20} src={media.icon} alt={media.name} />
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Banner;
