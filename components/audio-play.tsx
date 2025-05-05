import { useRef, useState } from 'react';
import { Play, Pause } from 'lucide-react'; 

const AudioPlayer = () => {
  const audioRef = useRef<HTMLAudioElement>(null);
  const [isPlaying, setIsPlaying] = useState(false);

  const togglePlay = () => {
    const audio = audioRef.current;
    if (!audio) return;
    audio.volume = 0.2;
    if (isPlaying) {
      audio.pause();
    } else {
      audio.play();
    }

    setIsPlaying(!isPlaying);
  };

  return (
<div className="absolute top-3/4 md:top-2/3  left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-50 flex items-center space-x-2 bg-white rounded-full px-4 py-2 shadow-lg">
  <button
    onClick={togglePlay}
    className="text-gray-800"
  >
    {isPlaying ? <Pause size={24} /> : <Play size={24} />}
  </button>
  <span className="text-sm font-medium text-gray-800">
    {isPlaying ? 'Pause Music' : 'Play Music'}
  </span>
  <audio ref={audioRef} src="./audio/wedding-song.mp3" loop />
</div>


  );
};

export default AudioPlayer;
