import React, { Suspense } from "react";
import { Switch, Route, Redirect } from "react-router-dom";

import { MainLayout } from "../Layouts";
import { urls } from "../utils/constants";

const CharactersPage = React.lazy(() =>
  import("../Containers/CharactersPage").then(({ CharactersPage }) => ({
    default: CharactersPage,
  }))
);

export const Router: React.FC = () => {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <Switch>
        <div className="container">
          <Route exact path={urls.base} component={CharactersPage} />

          <Route
            path={`${urls.base}${urls.character}${urls.selectedItem}`}
            render={(props) => <MainLayout {...props} />}
          />
        </div>

        <Redirect to={urls.base} />
      </Switch>
    </Suspense>
  );
};
