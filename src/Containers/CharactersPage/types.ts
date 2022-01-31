type Characters = {
  id: string;
  name: string;
  image: string;
  status: string;
};

type Pages = {
  pages: number;
};

export type CharactersData = {
  characters: {
    results: Characters[];
    info: Pages;
  }
};

export type CharactersVars = {
  page: number;
};
