import React, { Fragment, useState, useEffect, ReactNode } from "react";
import classNames from "classnames";
import { motion } from "framer-motion";

export interface AppAudioBarProps {
  className?: string;
  children?: ReactNode;
  toogleElement?: ReactNode;
}

const AppAudioBar = ({ className, children, toogleElement, ...props }: AppAudioBarProps) => {
  const [mousePosition, setMousePotition] = useState({
    x: 0,
    y: 0,
  });

  useEffect(() => {
    const mouseMove = (e: any) => {
      setMousePotition({
        x: e.clientX,
        y: e.clientY,
      });
    };

    window.addEventListener("mousemove", mouseMove);

    return () => {
      window.removeEventListener("mousemove", mouseMove);
    };
  }, []);

  const variants = {
    default: {
      x: mousePosition.x - 32,
      y: mousePosition.y - 32,
      backgroundColor: "#424030",
      mixBlendMode: "difference",
    },
  } as any;

  return (
    <Fragment>
      <div className={classNames("app-audio-bar", className)} {...props}>
        <motion.div className="audio-bar-container cursor-animations" variants={variants} animate="default" />
        {children}
      </div>
    </Fragment>
  );
};

export default AppAudioBar;
