import { Files } from "@md";

const alphabet = {
  а: "a",
  б: "b",
  в: "v",
  г: "g",
  д: "d",
  е: "e",
  ё: "yo",
  ж: "zh",
  з: "z",
  и: "i",
  й: "y",
  к: "k",
  л: "l",
  м: "m",
  н: "n",
  о: "o",
  п: "p",
  р: "r",
  с: "s",
  т: "t",
  у: "u",
  ф: "f",
  х: "kh",
  ц: "ts",
  ч: "ch",
  ш: "sh",
  щ: "shch",
  ы: "y",
  э: "e",
  ю: "yu",
  я: "ya",
  " ": "-",
  ъ: "",
  ь: "",
};

const slugChecker = async (slug: string, suffix: number = 0) => {
  const newSlug = suffix > 0 ? `${slug}-${suffix}` : slug;

  const res = await Files.findAll({ where: { slug: newSlug } });
  const files = JSON.parse(JSON.stringify(res)) as Array<unknown>;

  if (files.length === 0) return newSlug;
  return await slugChecker(slug, suffix + 1);
};

export const slugGenerator = async (name: string) => {
  const slug = name
    .toLowerCase()
    .split("")
    .map((char) => alphabet[char as keyof typeof alphabet] || char)
    .join("");

  return await slugChecker(slug);
};
