import { Route, Routes as Switch } from 'react-router-dom';

import routes from 'utils/routes';

const Main = () => {
  return (
    <Switch>
      {routes.map(({ id, path, component }) => (
        <Route key={id} path={path} element={component} />
      ))}
    </Switch>
  );
};

export default Main;
