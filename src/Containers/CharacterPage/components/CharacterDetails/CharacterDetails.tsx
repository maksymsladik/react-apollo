import Grid from "@mui/material/Grid";

import { EpisodesList } from "../EpisodesList";
import { UpLoadPhoto } from "../UpLoadPhoto";

import type { CharacterDetailsProps } from "../../types";

import styles from "./CharacterDetailsStyles.module.scss";

export const CharacterDetails: React.FC<CharacterDetailsProps> = ({
  data,
  characterId,
  progressing,
  handleChange,
}): JSX.Element => {
  return (
    <Grid sx={{ flexGrow: 1 }} container spacing={2}>
      <Grid item xs={12}>
        <Grid
          container
          justifyContent="center"
          spacing={16}
          style={{ marginTop: "0" }}
        >
          <Grid item>
            <UpLoadPhoto
              image={data?.character.image}
              characterId={characterId}
              progressing={progressing}
              handleChange={handleChange}
            />
            <div className={styles.characterInfo}>
              <div>Name: {data?.character.name}</div>
              <div>Gender: {data?.character.gender}</div>
            </div>
          </Grid>

          <Grid item>
            <EpisodesList
              episodes={data?.character.episode}
              characterId={characterId}
            />
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
};
