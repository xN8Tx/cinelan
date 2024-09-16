import { BigWrapper } from "../../wrappers";
import Disk from "./disk";
import { Guide } from "./guide";

export const SettingsPage = () => {
  return (
    <BigWrapper>
      <Guide />
      <Disk />
    </BigWrapper>
  );
};
