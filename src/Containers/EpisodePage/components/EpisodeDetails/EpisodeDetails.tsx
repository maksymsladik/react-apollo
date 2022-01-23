import { CharactersList } from "../CharactersList";

import type { EpisodeDetailsProps } from "../../types";

export const EpisodeDetails: React.FC<EpisodeDetailsProps> = ({
  data,
}): JSX.Element => {
  return (
    <div>
      <div>{data?.episode.name}</div>

      <CharactersList characters={data?.episode.characters} />
    </div>
  );
};
