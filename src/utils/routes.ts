import { lazy, LazyExoticComponent } from 'react';

const Landing = lazy(() => import(/* webpackChunkName: "LandingPage" */ 'pages/Landing'));
const SignIn = lazy(() => import(/* webpackChunkName: "SignInPage" */ 'pages/SignIn'));
const SignUp = lazy(() => import(/* webpackChunkName: "SignUpPage" */ 'pages/SignUp'));

type ComponentType = () => JSX.Element;

export interface IRoutes {
  id: number;
  title: string;
  path: Paths;
  Component: LazyExoticComponent<ComponentType> | ComponentType;
}

export enum Paths {
  empty = '/',
  signIn = '/sign-in',
  signUp = '/sign-up',
}

const routes: IRoutes[] = [
  {
    id: 1,
    path: Paths.empty,
    title: 'Welcome',
    Component: Landing,
  },
  {
    id: 2,
    path: Paths.signIn,
    title: 'Sign In',
    Component: SignIn,
  },
  {
    id: 3,
    path: Paths.signUp,
    title: 'Welcome',
    Component: SignUp,
  },
];

export default routes;
