import React from "react";
import { RouteComponentProps, useParams } from "react-router-dom";

import { Template } from "../../Components/Template";
import { CharacterDetails } from "./components/CharacterDetails";
import { useGetCharacterById } from "./useGetCharacterById";

export const CharacterPage: React.FC<RouteComponentProps> = (): JSX.Element => {
  const { id } = useParams() as { id: string };

  const { data, loading, error } = useGetCharacterById(id);

  return (
    <Template loading={loading} error={error}>
      <CharacterDetails data={data} characterId={id} />
    </Template>
  );
};
