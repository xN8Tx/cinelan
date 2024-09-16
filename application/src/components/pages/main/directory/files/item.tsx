import type { FileData } from "@tp";
import Image from "next/image";
import Link from "next/link";

import { FaFolder } from "react-icons/fa";
import { FaVideo } from "react-icons/fa6";

type FileProps = {
  file: FileData;
};

export const Item = ({ file }: FileProps) => {
  const href =
    file.type.name === "file" || file.type.name === "folder"
      ? ""
      : file.type.name === "movie"
        ? "movies"
        : "serials";

  return (
    <Link
      href={`${href}/${file.slug}`}
      className="w-full p-3 flex justify-between items-center rounded-xl transition-all hover:bg-card-promo-elements-c1-light  dark:hover:bg-card-promo-elements-c1-dark"
    >
      <div className="flex gap-2 items-center">
        {file.poster && (
          <Image
            width={80}
            height={56}
            src={file.poster!.original_source}
            className="rounded"
            alt={`Poster to ${file.name}`}
          />
        )}
        {!file.poster && (
          <div className="w-20 h-14 text-primary-c3 flex items-center justify-center">
            {file.type.name === "folder" ? (
              <FaFolder className="w-10 h-10" />
            ) : (
              <FaVideo className="w-10 h-10" />
            )}
          </div>
        )}
        <p className="font-medium text-base text-heading-c1-light dark:text-heading-c1-dark">
          {file.name}
        </p>
      </div>
      <div>
        <p className="font-medium text-sm text-heading-c2-light dark:text-heading-c2-dark">
          {file.type.name}
        </p>
      </div>
    </Link>
  );
};
