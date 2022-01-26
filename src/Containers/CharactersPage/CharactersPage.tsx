import React from "react";

import { PaginationBlock } from "../../Components/PaginationBlock";
import { Template } from "../../Components/Template";
import { CharactersList } from "./components/CharactersList";
import { useCharactersPageHook } from "./useCharactersPageHook";
import { useGetCharacters } from "./useGetCharacters";

export const CharactersPage: React.FC = (): JSX.Element => {
  const { page, setPage } = useCharactersPageHook();

  const { data, loading, error } = useGetCharacters(page);

  return (
    <Template loading={loading} error={error}>
      <CharactersList data={data} />

      <PaginationBlock
        count={data?.characters.info.pages}
        page={page}
        setPage={setPage}
      />
    </Template>
  );
};
