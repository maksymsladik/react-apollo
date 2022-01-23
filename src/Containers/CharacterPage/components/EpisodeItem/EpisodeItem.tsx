import { Link } from "react-router-dom";

import { urls } from "../../../../utils/constants";

import type { EpisodeItemProps } from "../../types";

export const EpisodeItem: React.FC<EpisodeItemProps> = ({
  id,
  name,
  characterId,
}): JSX.Element => {
  return (
    <div>
      <Link to={`/${urls.character}/${characterId}/${urls.episode}/${id}`}>
        {name}
      </Link>
    </div>
  );
};
