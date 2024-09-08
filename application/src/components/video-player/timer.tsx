import type { RefObject } from "react";

type TimerProps = {
  currentTime: number;
  videoRef: RefObject<HTMLVideoElement>;
  showControls: boolean;
  fullScreen: boolean;
};

export const formatTime = (time: number) => {
  const hours = Math.floor(time / 3600);
  const minutes = Math.floor((time % 3600) / 60);
  const seconds = Math.floor(time % 60);

  if (hours > 0) {
    return `${hours}:${minutes < 10 ? "0" : ""}${minutes}:${
      seconds < 10 ? "0" : ""
    }${seconds}`;
  } else {
    return `${minutes}:${seconds < 10 ? "0" : ""}${seconds}`;
  }
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
