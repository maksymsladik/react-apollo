import { useQuery } from "@apollo/client";

import { GET_CHARACTER_BY_ID } from "../../services/queries";

import type { CharactersData, CharactersVars } from "./types";

export const useGetCharacterById = (id: string) => {
  const { data, loading, error } = useQuery<CharactersData, CharactersVars>(
    GET_CHARACTER_BY_ID,
    {
      variables: {
        id,
      },
    }
  );

  return {
    data,
    loading,
    error,
  };
};
