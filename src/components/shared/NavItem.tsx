import React, { SVGProps } from 'react';
import Link, { LinkProps } from 'next/link';

type NavLinksProps = {
  icon: React.FC<SVGProps<any>>;
  name: string;
  className?: string;
  iconClassName?: string;
} & LinkProps;

const NavItem = (props: NavLinksProps) => {
  const { icon, className, iconClassName, name, ...linkProps } = props;
  const Icon = icon;

  return (
    <li>
      <Link className={className} {...linkProps}>
        <span>
          <Icon className={iconClassName} />
        </span>
        <span>{name}</span>
      </Link>
    </li>
  );
};

export default NavItem;
