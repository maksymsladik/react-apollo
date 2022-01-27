import Box from "@mui/material/Box";

import { CharacterItem } from "../../../../Components/CharacterItem";

import type { CharactersListProps, CharacterItemProps } from "../../types";

export const CharactersList: React.FC<CharactersListProps> = ({
  data,
}): JSX.Element => {
  return (
    <Box
      display="grid"
      gridTemplateColumns="repeat(auto-fill, minmax(min(20rem, 100%), 1fr))"
      gap={2}
      marginBottom="20px"
      width="100%"
    >
      {data?.characters?.results.map((character: CharacterItemProps) => (
        <CharacterItem key={character.id} {...character} />
      ))}
    </Box>
  );
};
