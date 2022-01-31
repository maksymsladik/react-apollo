import Box from "@mui/material/Box";

import { CharacterItem } from "../CharacterItem";

import type { CharactersListProps, Character } from "./types";

export const CharactersList: React.FC<CharactersListProps> = ({
  characters,
}): JSX.Element => {
  return (
    <Box
      display="grid"
      gridTemplateColumns="repeat(auto-fill, minmax(min(20rem, 100%), 1fr))"
      gap={2}
      marginBottom="20px"
      width="100%"
    >
      {characters?.map((character: Character) => (
        <CharacterItem key={character.id} {...character} />
      ))}
    </Box>
  );
};
