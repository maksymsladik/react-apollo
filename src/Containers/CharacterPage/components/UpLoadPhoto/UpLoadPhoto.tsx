import Avatar from "@mui/material/Avatar";
import ModeEditIcon from "@mui/icons-material/ModeEdit";

import { useUpLoadPhotoHook } from "./useUpLoadPhotoHook";
import { Loading } from "../../../../Components/Loading";

import type { UpLoadPhotoProps } from "../../types";

import styles from "./UpLoadPhotoStyles.module.scss";

export const UpLoadPhoto: React.FC<UpLoadPhotoProps> = ({
  image,
  progressing,
  characterId,
  handleChange,
}): JSX.Element => {
  const { loaded, characterImage, onLoad } = useUpLoadPhotoHook(
    image,
    progressing,
    characterId
  );

  return (
    <div className={styles.photoContent}>
      <Avatar
        variant="rounded"
        src={characterImage}
        sx={{ width: 500, height: 500 }}
        onLoad={onLoad}
        alt=""
      />

      {loaded && (
        <span className={styles.loading}>
          <Loading />
        </span>
      )}

      <label className={styles.label}>
        <input
          type="file"
          onChange={(event) => handleChange(event, characterId)}
        />

        {!loaded && (
          <div className={styles.edit}>
            <ModeEditIcon />
          </div>
        )}
      </label>
    </div>
  );
};
