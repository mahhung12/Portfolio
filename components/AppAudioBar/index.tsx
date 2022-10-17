import classNames from "classnames";
import React, { Fragment, ReactNode } from "react";

export interface AppAudioBarProps {
  className?: string;
  children?: ReactNode;
  toogleElement?: ReactNode;
}

const AppAudioBar = ({ className, children, toogleElement, ...props }: AppAudioBarProps) => {
  return (
    <Fragment>
      <div className={classNames("app-audio-bar", className)} {...props}>
        <span className="audio-bar-container">Play</span>
        {children}
      </div>
    </Fragment>
  );
};

export default AppAudioBar;
