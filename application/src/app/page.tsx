import type { PageProps } from "@tp";
import { getPageData } from "@lb";

import { PageWrapper } from "@cp";

const HomePage = async (props: PageProps) => {
  const data = await getPageData(props);

  return <PageWrapper data={data} />;
};

export default HomePage;
