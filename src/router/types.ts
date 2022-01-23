import { RouteComponentProps } from "react-router-dom";

export type Route = {
  path: string;
  exact: boolean;
  component: React.FC<RouteComponentProps>;
};
