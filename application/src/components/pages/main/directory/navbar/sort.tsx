"use client";
import type { ChangeEvent } from "react";

import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

import { Select, SelectItem } from "@nextui-org/react";

const sortParams = [
  { label: "Size up", key: "size-up" },
  { label: "Size down", key: "size-down" },
  { label: "Date up", key: "date-up" },
  { label: "Date down", key: "date-down" },
];

export const Sort = (props: {}) => {
  const [sortMethod, setSortMethod] = useState<string>("");
  const router = useRouter();

  const changeSelectHandler = (event: ChangeEvent<HTMLSelectElement>) => {
    setSortMethod(event.target.value as string);
  };

  useEffect(() => {
    router.push(`?sort=${sortMethod}`);
  }, [sortMethod]);

  return (
    <Select
      variant="bordered"
      placeholder="Sort"
      selectedKeys={[sortMethod]}
      className="max-w-60 text-black dark:text-white"
      size="md"
      onChange={changeSelectHandler}
    >
      {sortParams.map((sort) => (
        <SelectItem
          key={sort.key}
          className="text-heading-c1-light dark:text-heading-c1-dark"
        >
          {sort.label}
        </SelectItem>
      ))}
    </Select>
  );
};
