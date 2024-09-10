export const formatString = (input: string) => {
  if (input.includes("_")) {
    return input
      .split("_")
      .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
      .join(" ");
  } else {
    return input.charAt(0).toUpperCase() + input.slice(1);
  }
};
