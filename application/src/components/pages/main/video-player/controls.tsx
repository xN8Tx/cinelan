import { FaPause, FaPlay } from "react-icons/fa";
import {
  TbPlayerTrackNextFilled,
  TbPlayerTrackPrevFilled,
} from "react-icons/tb";

type ControlsProps = {
  skipTime: (time: number) => void;
  togglePlayPause: () => void;
  isPlaying: boolean;
  iconClassName: string;
};

export const Controls = ({
  skipTime,
  togglePlayPause,
  isPlaying,
  iconClassName,
}: ControlsProps) => {
  return (
    <div className="flex items-center gap-1">
      <button onClick={() => skipTime(-5)}>
        <TbPlayerTrackPrevFilled className={iconClassName} />
      </button>
      <button onClick={togglePlayPause}>
        {isPlaying ? (
          <FaPause className={iconClassName} />
        ) : (
          <FaPlay className={iconClassName} />
        )}
      </button>
      <button onClick={() => skipTime(5)}>
        <TbPlayerTrackNextFilled className={iconClassName} />
      </button>
    </div>
  );
};
