type Characters = {
  id: string;
  name: string;
  image: string;
};

type Episode = {
  id: string;
  name: string;
  air_date: string;
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
