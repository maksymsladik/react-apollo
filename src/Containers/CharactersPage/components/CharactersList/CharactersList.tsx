import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";

import { CharacterItem } from "../CharacterItem";

import type { CharactersListProps, CharacterItemProps } from "../../types";

export const CharactersList: React.FC<CharactersListProps> = ({
  data,
}): JSX.Element => {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <Grid
        container
        spacing={{ xs: 2, md: 3 }}
        columns={{ xs: 4, sm: 8, md: 12 }}
      >
        {data?.characters?.results.map((character: CharacterItemProps) => (
          <CharacterItem key={character.id} {...character} />
        ))}
      </Grid>
    </Box>
  );
};
