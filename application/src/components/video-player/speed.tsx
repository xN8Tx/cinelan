import type { RefObject } from "react";
import { useState } from "react";

import { TbBrandSpeedtest } from "react-icons/tb";

type SpeedProps = {
  videoRef: RefObject<HTMLVideoElement>;
  iconClassName: string;
};

export const Speed = ({ videoRef, iconClassName }: SpeedProps) => {
  const [showSpeedSelect, setShowSpeedSelect] = useState<boolean>(false);
  const [playbackRate, setPlaybackRate] = useState<number>(1);

  const handlePlaybackRate = (rate: number) => {
    const video = videoRef.current;
    if (video) {
      video.playbackRate = rate;
      setPlaybackRate(rate);
    }
    setShowSpeedSelect(false);
  };

  return (
    <div className="relative flex items-center">
      <button onClick={() => setShowSpeedSelect(!showSpeedSelect)}>
        <TbBrandSpeedtest className={iconClassName} />
      </button>
      {showSpeedSelect && (
        <select
          className="absolute bottom-[110%] left-[-50%] bg-card-promo-elements-c1-dark text-white rounded mt-1"
          value={playbackRate}
          onChange={(e) => handlePlaybackRate(Number(e.target.value))}
        >
          <option value="0.5">0.5x</option>
          <option value="1">1x</option>
          <option value="1.5">1.5x</option>
          <option value="2">2x</option>
        </select>
      )}
    </div>
  );
};
