import { ApolloError } from "@apollo/client";

export type TemplateProps = {
  loading: boolean;
  error: ApolloError | undefined;
  children: React.ReactNode;
};
