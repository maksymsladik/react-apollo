import { useState } from "react";

import { uploadImage } from "../../services/uploadImage";

export const useCharacterPageHook = () => {
  const [progressing, setProgressing] = useState<boolean>(false);

  const handleChange = (
    event: React.ChangeEvent<HTMLInputElement>,
    characterId: string
  ): void => {
    const file = event.target.files;

    if (file?.length) {
      uploadImage(characterId, file, setProgressing);
    }
  };

  return {
    progressing,
    handleChange,
  };
};
