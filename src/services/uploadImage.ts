import firebase, { storage } from "../utils/FirebaseSettings";

export const uploadImage = (
  characterId: string,
  file: FileList,
  setProgressing: React.Dispatch<React.SetStateAction<boolean>>
): void => {
  const imageName: string = `${characterId}_character_${file[0].name}`;

  const uploadTask: firebase.storage.UploadTask = storage.ref().child(`images/${imageName}`).put(file[0]);

  // Register three observers:
  // 1. 'state_changed' observer, called any time the state changes
  // 2. Error observer, called on failure
  // 3. Completion observer, called on successful completion
  uploadTask.on(
    "state_changed",
    (snapshot: firebase.storage.UploadTaskSnapshot) => {
      // Observe state change events such as progress, pause, and resume
      // Get task progress, including the number of bytes uploaded and the total number of bytes to be uploaded
      const progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
      console.log("Upload is " + progress + "% done");

      setProgressing(true);

      switch (snapshot.state) {
        case firebase.storage.TaskState.PAUSED: // or 'paused'
          console.log("Upload is paused");
          break;

        case firebase.storage.TaskState.RUNNING: // or 'running'
          console.log("Upload is running");
          break;
      }
    },
    (error: firebase.storage.FirebaseStorageError) => {
      console.log("Error", error);
    },
    async () => {
      // Handle successful uploads on complete
      // For instance, get the download URL: https://firebasestorage.googleapis.com/...
      const downloadURL = await uploadTask.snapshot.ref.getDownloadURL();
      console.log("downloadURL", downloadURL);

      localStorage.setItem(characterId, downloadURL);

      setProgressing(false);
    }
  );
};
