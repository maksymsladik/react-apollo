import Box from "@mui/material/Box";
import CircularProgress from "@mui/material/CircularProgress";

export const Loading: React.FC = (): JSX.Element => {
  return (
    <Box sx={{ display: "flex" }}>
      <CircularProgress />
    </Box>
  );
};
