import type { RefObject } from "react";
import { formatTime } from "@ut";

type TimerProps = {
  currentTime: number;
  videoRef: RefObject<HTMLVideoElement>;
  showControls: boolean;
  fullScreen: boolean;
};

export const Timer = ({
  currentTime,
  videoRef,
  showControls,
  fullScreen,
}: TimerProps) => {
  return (
    <div
      className={`absolute top-2 left-2 text-white text-sm bg-black/50 p-1 rounded transition-all ${
        showControls || fullScreen ? "opacity-100" : "opacity-0"
      }`}
    >
      {formatTime(currentTime)} / {formatTime(videoRef.current?.duration || 0)}
    </div>
  );
};
