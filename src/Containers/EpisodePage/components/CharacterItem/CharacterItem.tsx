import { Link } from "react-router-dom";

import { urls } from "../../../../utils/constants";

import type { CharacterItemProps } from "../../types";

export const CharacterItem: React.FC<CharacterItemProps> = ({
  id,
  name,
}): JSX.Element => {
  return (
    <div>
      <Link to={`/${urls.character}/${id}`}>{name}</Link>
    </div>
  );
};
