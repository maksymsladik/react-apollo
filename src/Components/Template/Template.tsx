import { LoadingResponse } from "../LoadingResponse";
import { ErrorResponse } from "../ErrorResponse";

import type { TemplateProps } from "./types";

export const Template: React.FC<TemplateProps> = ({
  loading,
  error,
  children,
}): JSX.Element => {
  if (loading) return <LoadingResponse />;

  if (error) return <ErrorResponse />;

  return <div>{children}</div>;
};
