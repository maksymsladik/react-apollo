import { useQuery } from "@apollo/client";

import { GET_EPISODE_BY_ID } from "../../services/queries";

import type { EpisodeData, EpisodeVars } from "./types";

export const useGetEpisodeById = (id: string) => {
  const { data, loading, error } = useQuery<EpisodeData, EpisodeVars>(
    GET_EPISODE_BY_ID,
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
