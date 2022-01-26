export type UpLoadPhotoProps = {
  image: string | undefined;
  characterId: string;
  progressing: boolean;
  handleChange: (event: React.ChangeEvent<HTMLInputElement>, characterId: string) => void;
};
