import React from "react";
import classNames from "classnames";
import { useRouter } from "next/router";

import AppLink from "@components//AppLink";

import { navigationLink } from "constants/common";

const AppHeader = () => {
  const router = useRouter();

  return (
    <div className="header-container">
      {navigationLink.map((link: any, index: number) => (
        <AppLink
          key={index}
          className={classNames("contain", {
            "link-active": link.asPath === router.asPath,
          })}
          href={`#${link.direct}`}
        >
          {console.log("router.asPath", router.asPath)}
          {console.log("router.pathname", router.pathname)}
          {link.header}
        </AppLink>
      ))}
    </div>
  );
};

export default AppHeader;
