import { useState } from "react";
import { Link } from "react-router-dom";

import { Loading } from "../Loading";
import { Item } from "./styles";
import { urls } from "../../utils/constants";

import type { CharacterItemProps } from "./types";

import styles from "./CharacterItemStyles.module.scss";

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
    <Item>
      <Link className={styles.link} to={`/${urls.character}/${id}`}>
        <img
          className={styles.avatar}
          src={characterImage}
          onLoad={onLoad}
          alt=""
        />

        {loaded && (
          <div className={styles.loading}>
            <Loading />
          </div>
        )}
      </Link>

      <div className={styles.name}>{name}</div>
      {status && <div className={styles.status}>{status}</div>}
    </Item>
  );
};
