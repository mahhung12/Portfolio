import React, { ReactNode } from 'react';
import Link from 'next/link';

type AppLinkProps = {
  href: string;
  children?: ReactNode | any;
  target?: string | undefined;
  rel?: string | undefined;
  className?: string;
  scroll?: boolean;
  onClick?: () => void;
};

const AppLink = ({
  href,
  children,
  target = undefined,
  rel = undefined,
  className,
  onClick,
  scroll,
  ...props
}: AppLinkProps) => {
  return (
    <Link href={href} {...props}>
      <a className={className} target={target} onClick={onClick} rel={rel}>
        {children}
      </a>
    </Link>
  );
};

export default AppLink;
