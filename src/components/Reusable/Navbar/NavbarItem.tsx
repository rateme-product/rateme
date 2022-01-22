import { FC, MouseEvent, SVGProps } from 'react';
import { useNavigate } from 'react-router-dom';
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
  const navigate = useNavigate();

  const onNavbarItemClick = (path: string) => {
    navigate(path);
  };

  return (
    <div
      className={classNames(classes.navbarItem, className)}
      onClick={path ? () => onNavbarItemClick(path) : (e) => onClick && onClick(e, { id, title })}
    >
      {title && <span>{title}</span>}
      {Icon && <Icon />}
    </div>
  );
};

export default NavbarItem;
