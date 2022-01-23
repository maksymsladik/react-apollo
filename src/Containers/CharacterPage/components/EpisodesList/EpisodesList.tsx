import { EpisodeItem } from "../EpisodeItem";

import type { EpisodesListProps } from "../../types";

export const EpisodesList: React.FC<EpisodesListProps> = ({
  episodes,
  characterId,
}): JSX.Element => {
  return (
    <div>
      {episodes?.map((episode) => (
        <EpisodeItem key={episode.id} {...episode} characterId={characterId} />
      ))}
    </div>
  );
};
