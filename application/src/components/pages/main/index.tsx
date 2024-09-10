import type { PageData } from "@tp";
import { Directory } from "./directory";

type MainPageProps = {
  data: PageData;
};

export const MainPage = async ({ data }: MainPageProps) => {
  return <Directory files={data?.files} file={data?.file} />;
};
