import type { PageProps } from "@tp";
import { getPageData } from "@lb";

import { PageWrapper } from "@cp";

const PathPage = async (props: PageProps) => {
  const data = await getPageData(props, null);

  console.log(props);

  return <PageWrapper data={data} />;
};

export default PathPage;
