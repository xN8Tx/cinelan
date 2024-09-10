import type { FileInfoDB } from "@tp";
import { formatSize, formatString, formatTime } from "@ut";

type ListProps = {
  title: string;
  data: FileInfoDB;
};

export const List = ({ title, data }: ListProps) => {
  return (
    <div className="flex flex-col gap-3">
      <p className="w-full text-base font-medium dark:text-p-text-c1-dark text-p-text-c1-light flex items-center gap-3">
        <span className="flex-shrink flex-grow rounded-sm opacity-35 border-bottom border-1 dark:border-p-text-c1-dark border-p-text-c1-light"></span>
        {title}
        <span className="flex-shrink flex-grow rounded-sm opacity-35 border-bottom border-1 dark:border-p-text-c1-dark border-p-text-c1-light"></span>
      </p>
      <ul className="flex flex-col gap-2">
        {data &&
          Object.keys(data)?.map((key) => (
            <li
              className="w-full text-sm  flex justify-between dark:text-heading-c1-dark text-heading-c1-light"
              key={key}
            >
              {formatString(key)}
              <span>
                {key === "duration"
                  ? formatTime(data[key] as number)
                  : key === "size"
                    ? `${formatSize(data[key] as number)} gb.`
                    : data[key as keyof FileInfoDB]}
              </span>
            </li>
          ))}
      </ul>
    </div>
  );
};
