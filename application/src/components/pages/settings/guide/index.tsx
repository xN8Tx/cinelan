import { Card } from "../../../wrappers";
import { Title } from "../title";

export const Guide = () => {
  return (
    <Card size="sm" height="sm">
      <Title title="Guide" />
      <div className="w-full h-full flex flex-col gap-3 overflow-y-scroll">
        <div className="flex flex-col gap-2">
          <h4 className="text-base font-medium dark:text-heading-c1-dark text-heading-c1-light">
            First start
          </h4>
          <p className="text-sm dark:text-p-text-c1-dark text-p-text-c1-light">
            First, you need to synchronize the database. To do this, go to the
            &quotDisk&quot tab in the settings and click on the &quotDatabase
            Synchronization&quot button. After that, you can start using the
            application.
          </p>
        </div>
        <div className="flex flex-col gap-2">
          <h4 className="text-base font-medium dark:text-heading-c1-dark text-heading-c1-light">
            File upload
          </h4>
          <p className="text-sm dark:text-p-text-c1-dark text-p-text-c1-light">
            To add files, you can use the &quotUpload&quot button in the
            Sidebar, or you can place the necessary files in the
            &quoteOrigin&quote folder. After that, go to the &quotDisk&quot tab
            in the settings and click the &quotFile Synchronization&quot button.
            <br />
            <span className="font-medium dark:text-heading-c1-dark text-heading-c1-light">
              Important: Folders are not processed, and the original files are
              deleted after synchronization!
            </span>
          </p>
        </div>
      </div>
    </Card>
  );
};
