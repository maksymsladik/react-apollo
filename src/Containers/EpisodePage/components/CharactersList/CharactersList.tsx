import { CharacterItem } from "../CharacterItem";

import type { CharactersListProps } from "../../types";

export const CharactersList: React.FC<CharactersListProps> = ({
  characters,
}): JSX.Element => {
  return (
    <div>
      {characters?.map((character) => (
        <CharacterItem key={character.id} {...character} />
      ))}
    </div>
  );
};
