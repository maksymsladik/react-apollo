import { Link } from "react-router-dom";

import { urls } from "../../../../utils/constants";

import type { EpisodeItemProps } from "../../types";

import styles from "./EpisodeItemStyles.module.scss";

export const EpisodeItem: React.FC<EpisodeItemProps> = ({
  id,
  name,
  index,
  characterId,
}): JSX.Element => {
  return (
    <li className={styles.episodeItem}>
      <span>{index + 1}. </span>
      <Link to={`/${urls.character}/${characterId}/${urls.episode}/${id}`}>
        {name}
      </Link>
    </li>
  );
};
