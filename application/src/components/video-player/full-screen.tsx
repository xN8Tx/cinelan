import type { Dispatch, RefObject, SetStateAction } from "react";
import { RxEnterFullScreen, RxExitFullScreen } from "react-icons/rx";

type VideoFullScreenPlayer = {
  requestFullscreen: () => void;
  webkitRequestFullscreen: () => void;
  msRequestFullscreen: () => void;
  msExitFullscreen: () => void;
  webkitExitFullscreen: () => void;
  exitFullscreen: () => void;
};

type FullScreenProps = {
  fullScreen: boolean;
  setFullScreen: Dispatch<SetStateAction<boolean>>;
  videoWrapperRef: RefObject<HTMLDivElement>;
  iconClassName: string;
};

export const FullScreen = ({
  fullScreen,
  setFullScreen,
  videoWrapperRef,
  iconClassName,
}: FullScreenProps) => {
  const handleFullScreen = () => {
    const video = videoWrapperRef.current as unknown as VideoFullScreenPlayer;
    if (video) {
      if (!fullScreen) {
        if (video.requestFullscreen) {
          video.requestFullscreen();
        } else if (video.webkitRequestFullscreen) {
          video.webkitRequestFullscreen();
        } else if (video.msRequestFullscreen) {
          video.msRequestFullscreen();
        }
      } else {
        if ((document as unknown as VideoFullScreenPlayer).exitFullscreen) {
          (document as unknown as VideoFullScreenPlayer).exitFullscreen();
        } else if (
          (document as unknown as VideoFullScreenPlayer).webkitExitFullscreen
        ) {
          (document as unknown as VideoFullScreenPlayer).webkitExitFullscreen();
        } else if (
          (document as unknown as VideoFullScreenPlayer).msExitFullscreen
        ) {
          (document as unknown as VideoFullScreenPlayer).msExitFullscreen();
        }
      }
    }
    setFullScreen((d) => !d);
  };

  return (
    <button onClick={handleFullScreen}>
      {fullScreen ? (
        <RxExitFullScreen className={iconClassName} />
      ) : (
        <RxEnterFullScreen className={iconClassName} />
      )}
    </button>
  );
};
