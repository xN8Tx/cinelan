export const getFolderForUpload = async (fileId: number) => {
  const data = await fetch(`/api/folders/${fileId}`);

  if (!data.ok) {
    console.log(await data.text());
    throw new Error("Can fetch folder. Error text in console");
  }

  return await data.json();
};
