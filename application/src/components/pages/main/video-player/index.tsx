"use client";

import { useEffect, useRef, useState } from "react";
import { throttle } from "lodash";

import { saveWatchTime } from "@ut";

import { Timer } from "./timer";
import { TimeLine } from "./time-line";
import { Controls } from "./controls";
import { Speed } from "./speed";
import { Volume } from "./volume";
import { FullScreen } from "./full-screen";

type VideoPlayerProps = {
  src: string;
  poster: string;
  id: number;
};

const VideoPlayer = ({ src, poster, id }: VideoPlayerProps) => {
  const videoRef = useRef<HTMLVideoElement>(null);
  const videoWrapperRef = useRef<HTMLDivElement>(null);

  const [showControls, setShowControls] = useState<boolean>(false);
  const [fullScreen, setFullScreen] = useState<boolean>(false);
  const [currentTime, setCurrentTime] = useState<number>(0);
  const [isPlaying, setIsPlaying] = useState<boolean>(false);

  const throttledSaveWatchTime = useRef(
    throttle(
      (time: number) => saveWatchTime({ time, fileId: id, userId: 1 }),
      60000,
    ),
  ).current;

  const handleTimeUpdate = () => {
    const video = videoRef.current;
    if (!video) return;
    setCurrentTime(video.currentTime);
    throttledSaveWatchTime(video.currentTime);
  };

  const skipTime = (seconds: number) => {
    const video = videoRef.current;
    if (!video) return;
    video.currentTime += seconds;
    setCurrentTime(video.currentTime);
  };

  const togglePlayPause = () => {
    const video = videoRef.current;
    if (!video) return;

    if (isPlaying) {
      video.pause();
    } else {
      video.play();
    }
    setIsPlaying(!isPlaying);
  };

  const iconClassName =
    "w-[1.5vw] h-[1.5vw] min-w-4 min-h-4 text-white/70 hover:text-white hover:scale-110 transition-all";

  const keyboardHandler = (event: KeyboardEvent) => {
    switch (event.key) {
      case " ":
        togglePlayPause.bind(this)();
        break;
      case "ArrowRight":
        skipTime(5);
        break;
      case "ArrowLeft":
        skipTime(-5);
        break;
      default:
        break;
    }
  };
  const fetchWatchedTime = async () => {
    const response = await fetch(`/api/save-watch-time/${id}`);
    const data = await response.json();
    if (data.watchedTime && videoRef.current) {
      videoRef.current.currentTime = data.watchedTime;
    }
  };

  useEffect(() => {
    fetchWatchedTime();
  }, [id]);

  useEffect(() => {
    window.addEventListener("keydown", keyboardHandler);

    return () => {
      window.removeEventListener("keydown", keyboardHandler);
    };
  }, [isPlaying]);

  return (
    <div
      className="w-full h-full relative rounded-xl"
      ref={videoWrapperRef}
      onMouseEnter={() => setShowControls(true)}
      onMouseLeave={() => setShowControls(false)}
    >
      <video
        ref={videoRef}
        onTimeUpdate={handleTimeUpdate}
        controls={false}
        width="100%"
        poster={poster}
        onClick={togglePlayPause}
        style={{ cursor: "pointer" }}
      >
        <source src={`api/stream-video/ghost.mkv`} type="video/mp4" />
        {/*<source src={`/api/video/${src}`} type="video/mp4" />*/}
      </video>
      <Timer
        videoRef={videoRef}
        fullScreen={fullScreen}
        currentTime={currentTime}
        showControls={showControls}
      />
      <div
        className={`w-full absolute z-20 bottom-3 px-3  flex flex-col gap-2  translate-y-0 opacity-1 transition-all ${
          showControls || fullScreen ? "opacity-100" : "opacity-0"
        }`}
      >
        <TimeLine
          currentTime={currentTime}
          setCurrentTime={setCurrentTime}
          videoRef={videoRef}
        />
        <div className={`flex items-center justify-between gap-3`}>
          <Controls
            skipTime={skipTime}
            togglePlayPause={togglePlayPause}
            isPlaying={isPlaying}
            iconClassName={iconClassName}
          />
          <div className="relative flex items-center justify-center gap-1">
            <Speed iconClassName={iconClassName} videoRef={videoRef} />
            <Volume iconClassName={iconClassName} videoRef={videoRef} />
            <FullScreen
              videoWrapperRef={videoWrapperRef}
              iconClassName={iconClassName}
              fullScreen={fullScreen}
              setFullScreen={setFullScreen}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default VideoPlayer;
