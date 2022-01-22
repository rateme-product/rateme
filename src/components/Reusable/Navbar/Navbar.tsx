import { FC, SVGProps } from 'react';
import classNames from 'classnames';

import NavbarItem, { INavbarItemProps } from './NavbarItem';
import useStyles from './style';

type INavbarItem = INavbarItemProps;

interface INavbarProps {
  leftSideItems?: INavbarItem[];
  rightSideItems?: INavbarItem[];
  Logo?: FC<SVGProps<SVGSVGElement>> | string;
  className?: string;
  navbarItemClassName?: string;
}

const Navbar = ({ leftSideItems, rightSideItems, Logo, className, navbarItemClassName }: INavbarProps): JSX.Element => {
  const classes = useStyles({ logoHeight: 60, logoWidth: 100 });

  return (
    <nav className={classNames(classes.navbar, className)}>
      {Logo && (
        <div className={classes.logoContainer}>
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
