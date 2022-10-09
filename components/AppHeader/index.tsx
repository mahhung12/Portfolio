import React from "react";
import classNames from "classnames";
import { useRouter } from "next/router";
import { Link } from "react-scroll";

import { navigationLink } from "constants/common";

const AppHeader = () => {
  const router = useRouter();

  return (
    <div className="header-container">
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
