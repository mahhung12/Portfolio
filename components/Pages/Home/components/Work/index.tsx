import React, { useRef, useState } from "react";
import { useRouter } from "next/router";
import { Divider, Row } from "antd";
import classNames from "classnames";

import All from "./All";
import Main from "./Main";
import Others from "./Others";
import Blockchain from "./Blockchain";
import AppTab from "@components//AppTab";

import { AUTHOR_HEADER_TITLE, USER_TABS } from "constants/author";

const { WORK } = AUTHOR_HEADER_TITLE;
const { ALL, BLOCKCHAIN, MAIN, OTHERS } = USER_TABS;

const WorkExp = () => {
  const router = useRouter();
  const ref = useRef<any>(null);

  const query = router?.query;
  const currentTab = query?.tab as any;

  const [activeTab, setActiveTab] = useState({
    tab: currentTab,
    isClick: false,
  });

  const RenderTab = ({ key, label, display }: any) => {
    const isChecked = currentTab === key;

    return (
      <div
        className={classNames(
          "tab-link",
          { "tab-selected": isChecked },
          { "d-none": !display }
        )}
      >
        <div className="text">{label}</div>
      </div>
    );
  };

  const handleChangeTab = (key: string) => {
    setActiveTab({
      tab: key,
      isClick: true,
    });
  };

  const tabs: any = [
    {
      key: ALL,
      tab: <RenderTab key={ALL} label="All" display={true} />,
      content: <All />,
    },
    {
      key: BLOCKCHAIN,
      tab: <RenderTab key={BLOCKCHAIN} label="Blockchain" display={true} />,
      content: <Blockchain />,
    },
    {
      key: MAIN,
      tab: <RenderTab key={MAIN} label="Main" display={true} />,
      content: <Main />,
    },
    {
      key: OTHERS,
      tab: <RenderTab key={OTHERS} label="Others" display={true} />,
      content: <Others />,
    },
  ];

  return (
    <div className="work-exp-container" ref={ref}>
      <Row className="work-exp-contain">
        <Divider
          orientation="left"
          orientationMargin="0"
          className="work-title"
        >
          {WORK}
        </Divider>

        <AppTab
          listTab={tabs}
          activeKey={activeTab?.tab}
          className="list-tabs"
          onChangeTab={handleChangeTab}
        />
      </Row>
    </div>
  );
};

export default WorkExp;
