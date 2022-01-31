import { useEffect, useState } from "react";

export const useUpLoadPhotoHook = (
  image: string | undefined,
  progressing: boolean,
  characterId: string
) => {
  const [loaded, setLoaded] = useState<boolean>(true);

  const [characterImage, setCharacterImage] = useState<string | undefined>(
    undefined
  );

  useEffect(() => {
    setLoaded(true);

    const savedImg = localStorage.getItem(characterId);

    const currentImg = savedImg ?? image;

    setCharacterImage(currentImg);
  }, [progressing, characterId, image]);

  const onLoad = (): void => {
    setLoaded(false);
  };

  return {
    loaded,
    characterImage,
    onLoad,
  };
};
