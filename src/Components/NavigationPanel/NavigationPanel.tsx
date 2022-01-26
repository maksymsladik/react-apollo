import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";

import { useNavigationPanelHook } from "./useNavigationPanelHook";

export const NavigationPanel: React.FC = (): JSX.Element => {
  const { onPushBack } = useNavigationPanelHook();

  return (
    <div style={{ width: "100%" }}>
      <Box
        component="span"
        sx={{
          display: "block",
          p: 1,
          m: 1,
          bgcolor: (theme) =>
            theme.palette.mode === "dark" ? "#101010" : "#fff",
          color: (theme) =>
            theme.palette.mode === "dark" ? "grey.300" : "grey.800",
          border: "1px solid",
          borderColor: (theme) =>
            theme.palette.mode === "dark" ? "grey.800" : "grey.300",
          borderRadius: 2,
          fontSize: "0.875rem",
          fontWeight: "700",
        }}
      >
        <Button variant="outlined" onClick={onPushBack}>
          <ArrowBackIosIcon />
        </Button>
      </Box>
    </div>
  );
};
