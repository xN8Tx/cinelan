import type { ServerActionType } from "@tp";
import { useContext } from "react";
import { SmallModalContext } from "@ct";

type HandlerFunction<T> = (args?: T) => Promise<void>;

type UseServerAction = <T = void>(
  action: ServerActionType<T>,
  loadingMessage: string,
) => HandlerFunction<T>;

export const useServerAction: UseServerAction = <T = void,>(
  action: ServerActionType<T>,
  loadingMessage: string,
) => {
  const {
    smallModalType,
    setSmallModalType,
    setSmallModalMessage,
    setLoadingProgress,
  } = useContext(SmallModalContext);

  return async (args?: T) => {
    if (smallModalType === "loading") return;
    setSmallModalMessage(loadingMessage);
    setSmallModalType("loading");
    setLoadingProgress(100);

    const res = await action(args);

    if (res.error) {
      setSmallModalType("error");
      setSmallModalMessage(res.error);
    } else if (res.message) {
      setSmallModalType("message");
      setSmallModalMessage(res.message);
    } else if (res.success) {
      setSmallModalType("success");
      setSmallModalMessage(res.success);
    }
  };
};
