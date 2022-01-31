export type Character = {
  id: string;
  name: string;
  image: string;
  status?: string;
};

export type CharactersListProps = {
  characters: Character[] | undefined;
};
