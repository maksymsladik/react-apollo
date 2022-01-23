import { Loading } from "../Loading";
import { Error } from "../Error";

import type { TemplateProps } from "./types";

export const Template: React.FC<TemplateProps> = ({
  loading,
  error,
  children,
}): JSX.Element => {
  if (loading) return <Loading />;

  if (error) return <Error />;

  return <div>{children}</div>;
};
