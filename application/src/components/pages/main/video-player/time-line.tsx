import type { Dispatch, RefObject, SetStateAction } from "react";

type TimeLineProps = {
  videoRef: RefObject<HTMLVideoElement>;
  currentTime: number;
  setCurrentTime: Dispatch<SetStateAction<number>>;
};

export const TimeLine = ({
  videoRef,
  currentTime,
  setCurrentTime,
}: TimeLineProps) => {
  const timelineHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
    const video = videoRef.current;
    if (video) {
      video.currentTime = Number(event.target.value);
      setCurrentTime(video.currentTime);
    }
  };

  return (
    <div className="w-full">
      <input
        type="range"
        min="0"
        className="w-full h-1 bg-black/50 rounded-lg appearance-primary-c1 accent-primary-c1"
        max={videoRef.current?.duration || 100}
        value={currentTime}
        onChange={timelineHandler}
      />
    </div>
  );
};
