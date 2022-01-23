import React from "react";

import * as paths from "./paths";

import type { Route } from './types';

const CharactersPage = React.lazy(() => import("../Containers/CharactersPage").then(({ CharactersPage }) => ({ default: CharactersPage })));
const CharacterPage = React.lazy(() => import("../Containers/CharacterPage").then(({ CharacterPage }) => ({ default: CharacterPage })));
const EpisodePage = React.lazy(() => import("../Containers/EpisodePage").then(({ EpisodePage }) => ({ default: EpisodePage })));

export const routes: Route[] = [
  {
    path: paths.CharactersUrl,
    component: CharactersPage,
    exact: true
  },
  {
    path: paths.CharacterDetailsUrl,
    component: CharacterPage,
    exact: true
  },
  {
    path: paths.EpisodeDetailsUrl,
    component: EpisodePage,
    exact: true
  },
];
