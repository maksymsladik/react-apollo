import { Link } from "react-router-dom";
import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";

import { useStyles } from "./styles";
import { urls } from "../../../../utils/constants";

import type { CharacterItemProps } from "../../types";

export const CharacterItem: React.FC<CharacterItemProps> = ({
  id,
  name,
  image,
  status,
}): JSX.Element => {
  const classes = useStyles();

  return (
    <Grid item xs={6} sm={3}>
      <Paper className={classes.paper}>
        <Link to={`${urls.character}/${id}`}>
          <img src={image} alt="" />
        </Link>

        <div>{name}</div>
        <div>{status}</div>
      </Paper>
    </Grid>
  );
};
