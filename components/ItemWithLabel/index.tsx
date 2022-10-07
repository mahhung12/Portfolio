import React from "react";
import Image from "next/image";
import { Tooltip } from "antd";
import classNames from "classnames";

import TooltipIcon from "public/svg/tooltip_icon.svg";

type ItemWithLabelProps = {
  label?: any;
  children?: any;
  className?: string;
  helpText?: string;
  contentClass?: string;
  labelClassName?: string;
  iconClassName?: string;
};

const ItemWithLabel = ({
  label,
  children,
  className,
  helpText,
  contentClass,
  labelClassName,
  iconClassName,
}: ItemWithLabelProps) => {
  return (
    <div className={classNames("item-with-label", className)}>
      {label && (
        <span className={classNames("label", labelClassName)}>
          {label}
          &nbsp;
          {helpText && (
            <Tooltip title={helpText} overlayClassName="tooltip-detail">
              <img
                className={classNames("icon cursor-pointer", iconClassName)}
                src={TooltipIcon}
                alt="Tooltip Icon"
              />
            </Tooltip>
          )}
        </span>
      )}
      <div className={classNames("content", contentClass)}>{children}</div>
    </div>
  );
};

export default ItemWithLabel;
