import CircularProgress from "@mui/material/CircularProgress";
import Box from "@mui/material/Box";

export const Loading: React.FC = (): JSX.Element => {
  return (
    <Box sx={{ display: "flex" }}>
      <CircularProgress />
    </Box>
  );
};
