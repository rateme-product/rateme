import { Navbar } from 'components/Reusable';

import LogoIcon from 'assets/temp/logo.png';

const tempNavbarItems = [
  {
    id: 1,
    title: 'First',
    onClick: () => {
      console.log('First');
    },
  },
  {
    id: 2,
    title: 'Second',
    onClick: () => {
      console.log('Second');
    },
  },
  {
    id: 3,
    title: 'Third',
    onClick: () => {
      console.log('Thirds');
    },
  },
  {
    id: 4,
    title: 'Fourth',
    onClick: () => {
      console.log('Fourth');
    },
  },
];

const Header = (): JSX.Element => {
  return (
    <div>
      <Navbar Logo={LogoIcon} leftSideItems={tempNavbarItems} />
    </div>
  );
};

export default Header;
