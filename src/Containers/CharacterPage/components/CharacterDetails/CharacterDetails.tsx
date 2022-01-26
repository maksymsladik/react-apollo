import { EpisodesList } from "../EpisodesList";

import { UpLoadPhoto } from "../../../../Components/UpLoadPhoto";

import type { CharacterDetailsProps } from "../../types";

export const CharacterDetails: React.FC<CharacterDetailsProps> = ({
  data,
  characterId,
  progressing,
  handleChange,
}): JSX.Element => {
  return (
    <div>
      <UpLoadPhoto
        image={data?.character.image}
        characterId={characterId}
        progressing={progressing}
        handleChange={handleChange}
      />

      <div>{data?.character.name}</div>

      <EpisodesList
        episodes={data?.character.episode}
        characterId={characterId}
      />
    </div>
  );
};
