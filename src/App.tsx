import React from "react";
import { BrowserRouter } from "react-router-dom";

import { Router } from "./router";
import { Header } from "./Components/Header";
import { ApolloSettings } from "./utils/ApolloSettings";

export const App: React.FC = (): JSX.Element => {
  return (
    <BrowserRouter>
      <ApolloSettings>
        <Header />
        <Router />
      </ApolloSettings>
    </BrowserRouter>
  );
};
