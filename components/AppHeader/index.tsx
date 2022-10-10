import React, { useEffect, useState } from "react";
import classNames from "classnames";
import { useRouter } from "next/router";
import { Link } from "react-scroll";

import { navigationLink } from "constants/common";

const AppHeader = () => {
  const [visibleHeaderBg, setVisibleHeaderBg] = useState(false);

  const handleScroll = () => setVisibleHeaderBg(window.pageYOffset > 0);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  });

  return (
    <div
      className={classNames("header-container", {
        "app-header-with-background": visibleHeaderBg,
      })}
    >
      {navigationLink.map((link: any, index: number) => (
        <Link
          key={index}
          to={link.direct}
          duration={500}
          activeClass="link-active"
          className="contain"
          smooth
          spy
        >
          {link.header}
        </Link>
      ))}
    </div>
  );
};

export default AppHeader;
