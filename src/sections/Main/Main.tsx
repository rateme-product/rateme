import { Route, Routes as Switch } from 'react-router-dom';

import routes from 'utils/routes';

const Main = () => {
  return (
    <Switch>
      {routes.map(({ id, path, Component }) => (
        <Route key={id} path={path} element={<Component />} />
      ))}
    </Switch>
  );
};

export default Main;
