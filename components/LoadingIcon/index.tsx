import React, { ReactNode } from "react";
import classNames from "classnames";
import Image from "next/image";

import styles from "./styles.module.scss";

type LoadingIconProps = {
  className?: string;
  src?: ReactNode | string | any;
};

const LoadingIcon = ({ src = "", className }: LoadingIconProps) => {
  return (
    <Image
      src={src}
      alt="loading"
      className={classNames(styles.image, className)}
    />
  );
};

export default LoadingIcon;
