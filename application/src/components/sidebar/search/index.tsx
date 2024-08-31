"use client";
import type { ChangeEvent } from "react";
import { useState } from "react";

import { Input } from "@nextui-org/input";
import { CiSearch } from "react-icons/ci";

export const Search = () => {
  const [searchValue, setSearchValue] = useState<string>("");

  const changeHandler = (event: ChangeEvent<HTMLInputElement>) => {
    setSearchValue(event.currentTarget.value);
  };

  return (
    <div className="w-full">
      <Input
        size="lg"
        className="w-full"
        type="text"
        variant="bordered"
        value={searchValue}
        onChange={changeHandler}
        startContent={<CiSearch color="text-heading-c1-dark" />}
        placeholder="Search"
      />
    </div>
  );
};
