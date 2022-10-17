import { FC } from "react";
import { BackTop, Spin } from "antd";
import Image from "next/image";

import AppSeo from "@components//AppSeo";
import AppHeader from "@components//AppHeader";
import AppFooter from "@components//AppFooter";
import AppAudioBar from "@components//AppAudioBar";
import LoadingIcon from "@components//LoadingIcon";

import ChevronUpIcon from "public/svg/chevron_up_icon.svg";

const Layout: FC<{
  children: any;
  title?: string;
  className?: string;
  notShowFooter?: boolean;
  notShowHeader?: boolean;
  socialImageUrl?: string;
  metaDescription?: string;
  faviconImageUrl?: string;
}> = ({ children, className, title = "", notShowFooter, notShowHeader, socialImageUrl, faviconImageUrl, metaDescription }) => {
  return (
    <Spin indicator={<LoadingIcon />} spinning={false}>
      <AppSeo title={title} socialImageUrl={socialImageUrl} faviconImageUrl={faviconImageUrl} metaDescription={metaDescription} />

      <AppAudioBar>
        <div className={className}>
          {!notShowHeader && <AppHeader />}
          <div className="app-content">
            <BackTop>
              <div className="scroll-to-top">
                <Image src={ChevronUpIcon} alt="" layout="fill" />
              </div>
            </BackTop>
            {children}
          </div>

          {!notShowFooter && <AppFooter />}
        </div>
      </AppAudioBar>
    </Spin>
  );
};

export default Layout;
