type Characters = {
  id: string;
  name: string;
};

type Episode = {
  id: string;
  name: string;
  characters: Characters[];
};

export type EpisodeData = {
  episode: Episode;
};

export type EpisodeVars = {
  id: string;
};

export type EpisodeDetailsProps = {
  data: EpisodeData | undefined;
};

export type CharactersListProps = {
  characters: Characters[] | undefined;
};

export type CharacterItemProps = Characters;
