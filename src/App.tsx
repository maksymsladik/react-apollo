import React from "react";
import { BrowserRouter } from "react-router-dom";

import Box from "@mui/material/Box";

import { Router } from "./router";
import { ApolloSettings } from "./utils/ApolloSettings";

export const App: React.FC = (): JSX.Element => {
  return (
    <BrowserRouter>
      <ApolloSettings>
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            flexDirection: "column",
            maxWidth: "1400px",
            margin: "0 auto",
            padding: "10px",
          }}
        >
          <Router />
        </Box>
      </ApolloSettings>
    </BrowserRouter>
  );
};
