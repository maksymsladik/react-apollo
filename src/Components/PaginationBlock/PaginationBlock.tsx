import Pagination from "@mui/material/Pagination";

import type { PaginationBlockProps } from "./types";

export const PaginationBlock: React.FC<PaginationBlockProps> = ({
  count,
  page,
  setPage,
}): JSX.Element => {
  return (
    <Pagination
      count={count}
      page={page}
      color="primary"
      onChange={(event, value) => setPage(value)}
    />
  );
};
