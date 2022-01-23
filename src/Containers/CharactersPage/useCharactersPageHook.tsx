import { useState } from "react";

export const useCharactersPageHook = () => {
  const [page, setPage] = useState<number>(1);

  return {
    page,
    setPage,
  };
};
