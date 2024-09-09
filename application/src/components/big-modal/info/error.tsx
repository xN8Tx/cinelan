export const Error = () => {
  return (
    <div className="w-full h-full flex flex-col gap-2">
      <p className="text-lg font-medium dark:text-heading-c1-dark text-heading-c1-light">
        Error
      </p>
      <p className="text-base dark:text-p-text-c1-dark text-p-text-c1-light">
        Ops, cant get informationt about file. More info about problem in
        console.
      </p>
    </div>
  );
};
