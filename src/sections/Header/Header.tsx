import { useNavigate } from 'react-router-dom';

import { Navbar } from 'components/Reusable';

import { Paths } from 'utils/routes';

import LogoIcon from 'assets/temp/logo.png';

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
];

const Header = (): JSX.Element => {
  const navigate = useNavigate();

  return (
    <div>
      <Navbar
        Logo={LogoIcon}
        logoHeight={60}
        logoWidth={160}
        onLogoClick={() => {
          navigate(Paths.empty);
        }}
        rightSideItems={tempNavbarItems}
      />
    </div>
  );
};

export default Header;
