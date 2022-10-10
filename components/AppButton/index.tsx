import React, { MouseEventHandler, ReactNode } from "react";
import classNames from "classnames";
import { Button } from "antd";

declare const ButtonVariants: ["default", "primary", "link", "secondary"];
declare type ButtonVariant = typeof ButtonVariants[number];

type AppButtonProps = {
  href?: string;
  text: ReactNode;
  tooltip?: string;
  loading?: boolean;
  disabled?: boolean;
  afterIcon?: ReactNode;
  prefixIcon?: ReactNode;
  htmlType?: string | any;
  className?: string | undefined;
  variant?: ButtonVariant | undefined;
  onClick?: MouseEventHandler<HTMLElement>;
};

function AppButton({
  variant = "default",
  prefixIcon,
  afterIcon,
  text,
  className,
  tooltip,
  ...props
}: AppButtonProps) {
  return (
    <Button
      className={classNames("button", `button--${variant}`, className)}
      {...props}
    >
      <div className="button--left">
        {prefixIcon}
        <span>{text}</span>
      </div>
      {afterIcon}
    </Button>
  );
}

export default AppButton;
