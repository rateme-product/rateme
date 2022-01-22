import { FC, MouseEvent, SVGProps } from 'react';
import classNames from 'classnames';

import { IIdTitle } from '../types';
import useStyles from './style';

export interface INavbarItemProps extends IIdTitle {
  Icon?: FC<SVGProps<SVGSVGElement>>;
  onClick: (e: MouseEvent<HTMLDivElement>, item: IIdTitle) => void;
  className?: string;
}

const NavbarItem = ({ id, title, Icon, onClick, className }: INavbarItemProps): JSX.Element => {
  const classes = useStyles({});

  return (
    <div className={classNames(classes.navbarItem, className)} onClick={(e) => onClick(e, { id, title })}>
      {title && <span>{title}</span>}
      {Icon && <Icon />}
    </div>
  );
};

export default NavbarItem;
