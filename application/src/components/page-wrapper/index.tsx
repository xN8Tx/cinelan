import type { PageData } from "@tp";
import { Directory, FileRoute } from "@cp";

type PageWrapperProps = {
  data: PageData;
};

export const PageWrapper = async ({ data }: PageWrapperProps) => {
  return (
    <>
      <FileRoute />
      {!data && <p>404 Nothing found</p>}
      {data && <Directory files={data.files} file={data.file} />}
    </>
  );
};
