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
    <div className={styles.characterDetails}>
      <div>
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
      </div>

      <EpisodesList
        episodes={data?.character.episode}
        characterId={characterId}
      />
    </div>
  );
};
