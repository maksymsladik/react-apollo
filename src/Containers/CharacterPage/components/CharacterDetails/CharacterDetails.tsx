import { EpisodesList } from "../EpisodesList";

import type { CharacterDetailsProps } from "../../types";

export const CharacterDetails: React.FC<CharacterDetailsProps> = ({
  data,
  characterId,
}): JSX.Element => {
  return (
    <div>
      <img src={data?.character.image} alt="" />
      <div>{data?.character.name}</div>

      <EpisodesList
        episodes={data?.character.episode}
        characterId={characterId}
      />
    </div>
  );
};
