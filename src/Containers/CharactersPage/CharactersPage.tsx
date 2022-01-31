import React from "react";

import { Template } from "../../Components/Template";
import { CharactersList } from "../../Components/CharactersList";
import { PaginationBlock } from "../../Components/PaginationBlock";
import { useCharactersPageHook } from "./useCharactersPageHook";
import { useGetCharacters } from "./useGetCharacters";

export const CharactersPage: React.FC = (): JSX.Element => {
  const { page, setPage } = useCharactersPageHook();

  const { data, loading, error } = useGetCharacters(page);

  return (
    <Template loading={loading} error={error}>
      <CharactersList characters={data?.characters?.results} />

      <PaginationBlock
        count={data?.characters.info.pages}
        page={page}
        setPage={setPage}
      />
    </Template>
  );
};
