import React, { useEffect, useState, useRef, FC } from 'react';
import { Tooltip } from 'antd';

const EllipsisText: FC<{
  className?: string;
  text?: any;
  tooltipClassName?: string;
  alwaysShowTooltip?: boolean;
  maxWidth?: number;
  tooltipText?: string;
  innerHtml?: boolean;
  icon?: any;
}> = ({ className, text, tooltipClassName, alwaysShowTooltip, maxWidth, tooltipText, innerHtml, icon }) => {
  const [isOverflow, setIsOverflow] = useState(false);
  const dataRef = useRef<any>();

  useEffect(() => {
    if (maxWidth) {
      setIsOverflow(
        dataRef.current.scrollWidth > dataRef.current.clientWidth || dataRef.current.scrollWidth > maxWidth,
      );
    } else {
      setIsOverflow(dataRef.current.scrollWidth > dataRef.current.clientWidth);
    }
  }, [text, maxWidth]);

  const renderContent = () => {
    return !innerHtml ? (
      <div
        ref={dataRef}
        style={{
          whiteSpace: 'nowrap',
          overflow: 'hidden',
          textOverflow: 'ellipsis',
        }}
        className={className}
      >
        {text}
      </div>
    ) : (
      <div
        ref={dataRef}
        style={{
          whiteSpace: 'nowrap',
          overflow: 'hidden',
          textOverflow: 'ellipsis',
        }}
        className={className}
        dangerouslySetInnerHTML={{ __html: text }}
      />
    );
  };

  return isOverflow || alwaysShowTooltip ? (
    <Tooltip title={tooltipText || text} overlayClassName={tooltipClassName ? tooltipClassName : 'tooltip-detail'}>
      {renderContent()}
      {icon && <img src={icon} />}
    </Tooltip>
  ) : (
    renderContent()
  );
};

export default EllipsisText;
