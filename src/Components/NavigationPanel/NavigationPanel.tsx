import { useNavigationPanelHook } from "./useNavigationPanelHook";

export const NavigationPanel: React.FC = (): JSX.Element => {
  const { onPushBack } = useNavigationPanelHook();

  return (
    <div>
      <button onClick={onPushBack}>Go Back</button>
    </div>
  );
};
