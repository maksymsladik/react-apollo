import { useEffect, useState } from "react";

import type { UpLoadPhotoProps } from "./types";

export const UpLoadPhoto: React.FC<UpLoadPhotoProps> = ({
  image,
  progressing,
  characterId,
  handleChange,
}): JSX.Element => {
  const [characterImage, setCharacterImage] = useState<string | undefined>(
    image
  );

  useEffect(() => {
    setCharacterImage(localStorage.getItem(characterId) ?? image);
  }, [progressing, characterId, image]);

  return (
    <div>
      <label>
        <input
          type="file"
          onChange={(event) => handleChange(event, characterId)}
        />

        <div>Edit</div>
      </label>

      <img src={characterImage} alt="" />
    </div>
  );
};
