import { useState } from "react";
import { Link } from "react-router-dom";
import Grid from "@mui/material/Grid";

import { Loading } from "../../../../Components/Loading";
import { Item } from "./styles";
import { urls } from "../../../../utils/constants";

import type { CharacterItemProps } from "../../types";

export const CharacterItem: React.FC<CharacterItemProps> = ({
  id,
  name,
  image,
  status,
}): JSX.Element => {
  const [loaded, setLoaded] = useState<boolean>(true);

  const characterImage = localStorage.getItem(id) ?? image;

  const onLoad = () => {
    setLoaded(false);
  };

  return (
    <Grid item xs={2} sm={4} md={4}>
      <Item>
        {loaded && <Loading />}

        <Link to={`${urls.character}/${id}`}>
          <img src={characterImage} alt="" onLoad={onLoad} />
        </Link>

        <div>{name}</div>
        <div>{status}</div>
      </Item>
    </Grid>
  );
};
