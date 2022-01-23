import { ApolloClient, InMemoryCache, ApolloProvider } from "@apollo/client";

import type { ApolloSettingsProps } from "../types";

const uri = process.env.REACT_APP_GRAPHQL_PUBLIC_API;

const cache = new InMemoryCache();

const client = new ApolloClient({
  uri,
  cache,
});

export const ApolloSettings: React.FC<ApolloSettingsProps> = ({
  children,
}): JSX.Element => {
  return <ApolloProvider client={client}>{children}</ApolloProvider>;
};
