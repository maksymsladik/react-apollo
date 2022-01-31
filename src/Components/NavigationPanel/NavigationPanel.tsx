import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";

import { useNavigationPanelHook } from "./useNavigationPanelHook";

export const NavigationPanel: React.FC = (): JSX.Element => {
  const { onPushBack } = useNavigationPanelHook();

  return (
    <Box
      component="div"
      sx={{
        bgcolor: "#f2f8ff",
        padding: "10px 20px",
      }}
    >
      <Button variant="outlined" onClick={onPushBack}>
        <ArrowBackIosIcon />
      </Button>
    </Box>
  );
};
