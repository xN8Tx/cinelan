export const Loading = () => {
  return (
    <div className="w-full h-full flex flex-col gap-2 items-center justify-center">
      <span className="animate-ping inline-flex w-6 h-6 rounded-full bg-primary-c2"></span>
      <p className="text-lg font-medium dark:text-heading-c1-dark text-heading-c1-light">
        Loading
      </p>
    </div>
  );
};
