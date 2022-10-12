import React, { useState } from "react";
import { Button } from "antd";

import Modal from "@components//Modal";
import ModalContentCustom from "@components//Modal/ModalContentCustom";

import { USER_TABS } from "constants/author";

const { ALL } = USER_TABS;

const All = () => {
    const n = 8;

    const [visible, setVisible] = useState(false);

    const handleSetVisible = () => setVisible(true);

    const handleCloseModal = () => setVisible(false);

    return (
        <div className="all-tab">
            {[...Array(n)].map((e, i) => (
                <Button onClick={handleSetVisible} key={i}>
                    Open Modal
                </Button>
            ))}

            <Modal
                visible={visible}
                width={650}
                onClose={handleCloseModal}
                showCloseIcon
                maskClosable
                centered
            >
                <ModalContentCustom
                    breadcrumbs={[ALL, "?"]}
                    title="mHung"
                    status="In Progress"
                    assignee="mHung"
                    dueDate="Feb 17, 2022"
                    tech="React JS, Redux..."
                    content="Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ut
                    error exercitationem dolore. Corrupti, id aliquam! Enim eaque
                    modi laboriosam ipsa doloremque, saepe tempore nulla cumque
                    exercitationem. Labore iure pariatur eligendi?"
                />
            </Modal>
        </div>
    );
};

export default All;
