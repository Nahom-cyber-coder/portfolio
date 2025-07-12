import React, { useEffect, useRef } from 'react';
import { useTheme } from '../contexts/ThemeContext';

const BackgroundMusic = () => {
  const audioRef = useRef<HTMLAudioElement>(null);
  const { soundEnabled } = useTheme();

  useEffect(() => {
    const audio = audioRef.current;
    if (!audio) return;

    if (soundEnabled) {
      audio.volume = 0.3; // Set volume to 30%
      audio.play().catch(console.error);
    } else {
      audio.pause();
    }
  }, [soundEnabled]);

  return (
    <audio
      ref={audioRef}
      loop
      preload="auto"
      src="https://files.catbox.moe/ltcdys.mp3"
    />
  );
};

export default BackgroundMusic;