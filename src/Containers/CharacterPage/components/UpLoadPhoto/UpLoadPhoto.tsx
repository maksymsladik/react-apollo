import { useUpLoadPhotoHook } from "./useUpLoadPhotoHook";
import { Loading } from "../../../../Components/Loading";

import type { UpLoadPhotoProps } from "../../types";

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
    <div>
      <label>
        <input
          type="file"
          onChange={(event) => handleChange(event, characterId)}
        />

        <div>Edit</div>
      </label>

      <div
        style={{
          height: "300px",
          position: "relative",
          overflow: "hidden",
        }}
      >
        <img
          src={characterImage}
          alt=""
          onLoad={onLoad}
          style={{ width: "100%" }}
        />
        {loaded && (
          <span style={{ position: "absolute", top: "50%", left: "50%" }}>
            <Loading />
          </span>
        )}
      </div>
    </div>
  );
};
