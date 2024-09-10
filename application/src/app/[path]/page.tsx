import type { PageProps } from "@tp";
import { getPageData } from "@lb";

import { MainPage } from "@cp";

export const dynamic = "force-dynamic";

const PathPage = async (props: PageProps) => {
  const data = await getPageData(props, null);

  return <MainPage data={data} />;
};

export default PathPage;
