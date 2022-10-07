import React from "react";
import { Row } from "antd";
import Image from "next/image";
import classNames from "classnames";

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
          className="avatar"
          width={imageWidth}
          height={imageHeight}
        />
        <h2>{authorName}</h2>
        <h3>{authorDesc}</h3>
      </Row>

      <Row className="social-contain">
        {AUTHOR_SOCIAL_MEDIA.map((media: any, index: number) => {
          return <div key={index}>{media?.name}</div>;
        })}
      </Row>
    </div>
  );
};

export default Banner;
