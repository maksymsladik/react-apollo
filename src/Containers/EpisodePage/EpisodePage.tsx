import React from "react";
import { RouteComponentProps, useParams } from "react-router-dom";

import { Template } from "../../Components/Template";
import { EpisodeDetails } from "./components/EpisodeDetails";
import { useGetEpisodeById } from "./useGetEpisodeById";

export const EpisodePage: React.FC<RouteComponentProps> = (): JSX.Element => {
  const { id } = useParams() as { id: string };

  const { data, loading, error } = useGetEpisodeById(id);

  return (
    <Template loading={loading} error={error}>
      <EpisodeDetails data={data} />
    </Template>
  );
};
