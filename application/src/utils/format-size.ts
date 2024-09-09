export const formatSize = (size: number) => {
  const gigabytes = (size / 1024 / 1024 / 1024).toFixed(2);
  return gigabytes;
};
