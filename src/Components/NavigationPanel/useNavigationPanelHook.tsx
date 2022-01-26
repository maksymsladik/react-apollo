import { useHistory } from "react-router-dom";

export const useNavigationPanelHook = () => {
  const history = useHistory();

  const onPushBack = () => {
    history.goBack();
  };

  return {
    onPushBack,
  };
};
