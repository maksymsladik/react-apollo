type Episode = {
  id: string;
  name: string;
};

type Character = {
  id: string;
  name: string;
  image: string;
  episode: Episode[];
};

export type CharactersData = {
  character: Character;
};

export type CharactersVars = {
  id: string;
};

export type CharacterDetailsProps = {
  data: CharactersData | undefined;
  characterId: string;
};

export type EpisodesListProps = {
  episodes: Episode[] | undefined;
  characterId: string;
};

export type EpisodeItemProps = Episode & {
  characterId: string;
};
