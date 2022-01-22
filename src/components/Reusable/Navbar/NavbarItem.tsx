import { FC, MouseEvent, SVGProps } from 'react';
import { NavLink } from 'react-router-dom';
import classNames from 'classnames';

import { IIdTitle } from '../types';
import useStyles from './style';

export interface INavbarItemProps extends IIdTitle {
  Icon?: FC<SVGProps<SVGSVGElement>>;
  path?: string;
  onClick?: (e: MouseEvent<HTMLDivElement>, item: IIdTitle) => void;
  className?: string;
}

const NavbarItem = ({ id, title, Icon, path, onClick, className }: INavbarItemProps): JSX.Element => {
  const classes = useStyles({});

  return path ? (
    <NavLink
      className={({ isActive }) => classNames(classes.navbarItem, { [classes.active]: isActive }, className)}
      to={path}
    >
      {title && <span>{title}</span>}
      {Icon && <Icon />}
    </NavLink>
  ) : (
    <div className={classNames(classes.navbarItem, className)} onClick={(e) => onClick && onClick(e, { id, title })}>
      {title && <span>{title}</span>}
      {Icon && <Icon />}
    </div>
  );
};

export default NavbarItem;
