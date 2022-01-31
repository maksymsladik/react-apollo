import Box from "@mui/material/Box";

import { LoadingResponse } from "../LoadingResponse";
import { ErrorResponse } from "../ErrorResponse";

import type { TemplateProps } from "./types";

export const Template: React.FC<TemplateProps> = ({
  loading,
  error,
  children,
}): JSX.Element => {
  const content = {
    loading: <LoadingResponse />,
    error: <ErrorResponse />,
    children,
  };

  return (
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
      {loading && content.loading}

      {error && content.error}

      {!loading && !error && content.children}
    </Box>
  );
};
