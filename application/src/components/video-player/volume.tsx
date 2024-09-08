import type { RefObject } from "react";
import { useState } from "react";
import { FaVolumeOff } from "react-icons/fa";

type VolumeProps = {
  videoRef: RefObject<HTMLVideoElement>;
  iconClassName: string;
};

export const Volume = ({ videoRef, iconClassName }: VolumeProps) => {
  const [showVolume, setShowVolume] = useState<boolean>(false);
  const [volume, setVolume] = useState<number>(1);

  const handleVolumeChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const video = videoRef.current;
    const newVolume = Number(event.target.value);
    if (video) {
      video.volume = newVolume;
      setVolume(newVolume);
    }
  };

  return (
    <div className="relative flex items-center">
      <button onClick={() => setShowVolume(!showVolume)}>
        <FaVolumeOff className={iconClassName} />
      </button>
      {showVolume && (
        <input
          type="range"
          min="0"
          max="1"
          step="0.01"
          value={volume}
          onChange={handleVolumeChange}
          className="w-24 h-1 bg-black/50 rounded-lg"
        />
      )}
    </div>
  );
};
