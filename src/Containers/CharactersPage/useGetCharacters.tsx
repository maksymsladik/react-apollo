import { useQuery } from "@apollo/client";

import { GET_CHARACTERS } from "../../services/queries";

import type { CharactersData, CharactersVars } from "./types";

export const useGetCharacters = (page: number) => {
  const { data, loading, error } = useQuery<CharactersData, CharactersVars>(
    GET_CHARACTERS,
    {
      variables: {
        page,
      },
    }
  );

  return {
    data,
    loading,
    error,
  };
};
