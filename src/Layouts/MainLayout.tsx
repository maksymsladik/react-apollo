import React from "react";
import { StaticContext } from "react-router";
import { Switch, Route, Redirect, RouteComponentProps } from "react-router-dom";

import { NavigationPanel } from "../Components/NavigationPanel";
import { urls } from "../utils/constants";

const CharacterPage = React.lazy(() =>
  import("../Containers/CharacterPage").then(({ CharacterPage }) => ({
    default: CharacterPage,
  }))
);

const EpisodePage = React.lazy(() =>
  import("../Containers/EpisodePage").then(({ EpisodePage }) => ({
    default: EpisodePage,
  }))
);

export const MainLayout = (
  props: RouteComponentProps<
    {
      [x: string]: string | undefined;
    },
    StaticContext,
    unknown
  >
): JSX.Element => {
  const { match } = props;

  return (
    <>
      <NavigationPanel />

      <Switch>
        <Route
          exact
          path={`${match.path}/${urls.episode}${urls.selectedItem}`}
          render={(props) => <EpisodePage {...props} />}
        />

        <Route
          exact
          path={match.path}
          render={(props) => <CharacterPage {...props} />}
        />

        <Redirect to={urls.base} />
      </Switch>
    </>
  );
};
