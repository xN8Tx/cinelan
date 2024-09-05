import type { FileDescriptionDB } from "@tp";

type InfoProps = {
  description: FileDescriptionDB | undefined;
};

export const Info = ({ description }: InfoProps) => {
  if (!description) return <></>;

  return (
    <div className="flex flex-col gap-2">
      <h2 className="text-base font-medium text-heading-c1-light dark:text-heading-c1-dark">
        {description.original_name}
      </h2>
      <p className="text-sm text-heading-c2-light dark:text-heading-c2-dark">
        {description.description}
      </p>
    </div>
  );
};
