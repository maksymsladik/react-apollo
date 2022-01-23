import { urls } from "../utils/constants";

export const CharactersUrl: string = urls.base; // characters list
export const CharacterDetailsUrl: string = `/${urls.character}${urls.selectedItem}`; // character item
export const EpisodeDetailsUrl: string = `/${urls.character}${urls.selectedItem}/${urls.episode}${urls.selectedItem}`; // episode item of character item
