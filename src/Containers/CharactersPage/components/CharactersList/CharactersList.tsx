import Grid from "@material-ui/core/Grid";

import { CharacterItem } from "../CharacterItem";
import { useStyles } from "./styles";

import type { CharactersListProps, CharacterItemProps } from "../../types";

export const CharactersList: React.FC<CharactersListProps> = ({
  data,
}): JSX.Element => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Grid container spacing={1}>
        <Grid container item xs={12} spacing={3}>
          {data?.characters?.results.map((character: CharacterItemProps) => (
            <CharacterItem key={character.id} {...character} />
          ))}
        </Grid>
      </Grid>
    </div>
  );
};
