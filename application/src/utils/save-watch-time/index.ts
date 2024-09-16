type SaveWatchTimeArgs = {
  time: number;
  fileId: number;
  userId: number;
};

type SaveWatchTime = (args: SaveWatchTimeArgs) => Promise<void>;

export const saveWatchTime: SaveWatchTime = async (args) => {
  try {
    const formData = new FormData();

    Object.keys(args).forEach((key) => {
      formData.set(key, args[key as keyof SaveWatchTimeArgs].toString());
    });

    const response = await fetch("/api/save-watch-time", {
      method: "POST",
      body: formData,
    });

    if (!response.ok) {
      throw new Error(await response.text());
    }
  } catch (error) {
    console.log("Can not save watched time. Error:", error);
  }
};
