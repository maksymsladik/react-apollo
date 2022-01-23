import Pagination from "@material-ui/lab/Pagination";

import { useStyles } from "./styles";

import type { PaginationBlockProps } from "./types";

export const PaginationBlock: React.FC<PaginationBlockProps> = ({
  count,
  page,
  setPage,
}): JSX.Element => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Pagination
        count={count}
        page={page}
        color="primary"
        onChange={(event, value) => setPage(value)}
      />
    </div>
  );
};
