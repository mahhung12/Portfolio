import React, { ReactNode } from 'react';
import { Dropdown } from 'antd';
import classNames from 'classnames';

type AppDropdownProps = {
  overlay: any;
  children?: ReactNode;
  placement?: string | any;
  trigger?: string | any;
  className?: string;
  onOpenChange?: any;
  open?: boolean;
};

const AppDropdown = ({ children, trigger, className, ...props }: AppDropdownProps) => {
  return (
    <Dropdown
      overlayClassName={classNames('app-dropdown', className)}
      trigger={[trigger]}
      getPopupContainer={(trigger: any) => trigger.parentElement}
      {...props}
    >
      {children}
    </Dropdown>
  );
};

AppDropdown.defaultProps = {
  placement: 'bottomRight',
  trigger: 'click',
};

export default AppDropdown;
