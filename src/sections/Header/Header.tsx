import { useNavigate } from 'react-router-dom';

import { Navbar } from 'components/Reusable';

import { Paths } from 'utils/routes';

import LogoIcon from 'assets/temp/logo.png';

import useStyles from './style';

const tempNavbarItems = [
  {
    id: 1,
    title: 'Sign In',
    path: Paths.signIn,
  },
  {
    id: 2,
    title: 'Sign Up',
    path: Paths.signUp,
  },
  {
    id: 3,
    title: 'WithoutRoute',
  },
];

const Header = (): JSX.Element => {
  const navigate = useNavigate();
  const classes = useStyles();

  return (
    <div>
      <Navbar
        className={classes.nav}
        Logo={LogoIcon}
        logoHeight={80}
        logoWidth={200}
        onLogoClick={() => {
          navigate(Paths.empty);
        }}
        rightSideItems={tempNavbarItems}
      />
    </div>
  );
};

export default Header;
