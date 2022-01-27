import { CharactersList } from "../CharactersList";

import type { EpisodeDetailsProps } from "../../types";

import styles from "./EpisodeDetailsStyles.module.scss";

export const EpisodeDetails: React.FC<EpisodeDetailsProps> = ({
  data,
}): JSX.Element => {
  return (
    <>
      <div className={styles.name}>Name of film: {data?.episode.name}</div>
      <div className={styles.date}>Air date: {data?.episode.air_date}</div>

      <div className={styles.title}>List of characters in this episode</div>

      <CharactersList characters={data?.episode.characters} />
    </>
  );
};
