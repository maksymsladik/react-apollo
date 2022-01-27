import { EpisodeItem } from "../EpisodeItem";

import type { EpisodesListProps } from "../../types";

import styles from "./EpisodesListStyles.module.scss";

export const EpisodesList: React.FC<EpisodesListProps> = ({
  episodes,
  characterId,
}): JSX.Element => {
  return (
    <div>
      <div className={styles.title}>List of episodes</div>

      <ul className={styles.list}>
        {episodes?.map((episode, i) => (
          <EpisodeItem
            key={episode.id}
            {...episode}
            index={i}
            characterId={characterId}
          />
        ))}
      </ul>
    </div>
  );
};
