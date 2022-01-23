import React, { Suspense } from "react";
import { Switch, Route, Redirect } from "react-router-dom";

import { routes } from "./routes";
import { urls } from "../utils/constants";

export const Router: React.FC = (): JSX.Element => {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <Switch>
        {routes.map((route, index) => {
          return (
            <Route
              key={index}
              exact={route.exact}
              path={route.path}
              component={route.component}
            />
          );
        })}

        <Redirect to={urls.base} />
      </Switch>
    </Suspense>
  );
};
