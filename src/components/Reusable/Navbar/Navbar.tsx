import { FC, SVGProps } from 'react';
import classNames from 'classnames';

import { TStringNumber } from '../types';
import NavbarItem, { INavbarItemProps } from './NavbarItem';
import useStyles from './style';

type INavbarItem = INavbarItemProps;

interface INavbarProps {
  leftSideItems?: INavbarItem[];
  rightSideItems?: INavbarItem[];
  Logo?: FC<SVGProps<SVGSVGElement>> | string;
  logoHeight?: TStringNumber;
  logoWidth?: TStringNumber;
  onLogoClick?: () => void;
  className?: string;
  navbarItemClassName?: string;
}

const Navbar = ({
  leftSideItems,
  rightSideItems,
  Logo,
  logoHeight = 'unset',
  logoWidth = 'unset',
  onLogoClick,
  className,
  navbarItemClassName,
}: INavbarProps): JSX.Element => {
  const classes = useStyles({ logoHeight, logoWidth, logoPointer: !!onLogoClick });

  return (
    <nav className={classNames(classes.navbar, className)}>
      {Logo && (
        <div className={classes.logoContainer} onClick={onLogoClick}>
          {typeof Logo === 'string' ? <img src={Logo} alt="Logo" /> : <Logo />}
        </div>
      )}
      {leftSideItems?.length && (
        <div className={classes.leftSideContainer}>
          {leftSideItems.map((item) => (
            <NavbarItem key={item.id} {...item} className={navbarItemClassName} />
          ))}
        </div>
      )}
      {rightSideItems?.length && (
        <div className={classes.rightSideContainer}>
          {rightSideItems.map((item) => (
            <NavbarItem key={item.id} {...item} className={navbarItemClassName} />
          ))}
        </div>
      )}
    </nav>
  );
};

export default Navbar;
