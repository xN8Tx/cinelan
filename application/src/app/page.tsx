import type { PageProps } from "@tp";
import { getPageData } from "@lb";

import { MainPage } from "@cp";

export const dynamic = "force-dynamic";

const HomePage = async (props: PageProps) => {
  const data = await getPageData(props, null);

  return <MainPage data={data} />;
};

export default HomePage;
